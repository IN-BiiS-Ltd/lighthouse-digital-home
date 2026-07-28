-- 1. Move has_role out of the exposed API schema
CREATE SCHEMA IF NOT EXISTS private;
GRANT USAGE ON SCHEMA private TO authenticated, service_role;

CREATE OR REPLACE FUNCTION private.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

REVOKE ALL ON FUNCTION private.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION private.has_role(uuid, public.app_role) TO authenticated, service_role;

-- 2. Recreate policies against the private helper
DROP POLICY IF EXISTS "Admins can delete documents" ON public.application_documents;
DROP POLICY IF EXISTS "Admins can read documents" ON public.application_documents;
DROP POLICY IF EXISTS "Admins can delete applications" ON public.teacher_applications;
DROP POLICY IF EXISTS "Admins can read applications" ON public.teacher_applications;
DROP POLICY IF EXISTS "Admins can update applications" ON public.teacher_applications;
DROP POLICY IF EXISTS "Admins manage roles" ON public.user_roles;

CREATE POLICY "Admins can read documents" ON public.application_documents
  FOR SELECT TO authenticated USING (private.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete documents" ON public.application_documents
  FOR DELETE TO authenticated USING (private.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can insert documents" ON public.application_documents
  FOR INSERT TO authenticated WITH CHECK (
    private.has_role(auth.uid(), 'admin')
    AND EXISTS (SELECT 1 FROM public.teacher_applications ta WHERE ta.id = application_id)
  );

CREATE POLICY "Admins can read applications" ON public.teacher_applications
  FOR SELECT TO authenticated USING (private.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update applications" ON public.teacher_applications
  FOR UPDATE TO authenticated USING (private.has_role(auth.uid(), 'admin'))
  WITH CHECK (private.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete applications" ON public.teacher_applications
  FOR DELETE TO authenticated USING (private.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can insert applications" ON public.teacher_applications
  FOR INSERT TO authenticated WITH CHECK (private.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins manage roles" ON public.user_roles
  FOR ALL TO authenticated USING (private.has_role(auth.uid(), 'admin'))
  WITH CHECK (private.has_role(auth.uid(), 'admin'));

DROP FUNCTION IF EXISTS public.has_role(uuid, public.app_role);

-- 3. Storage policies for the private teacher-cvs bucket
DROP POLICY IF EXISTS "Admins can read teacher cvs" ON storage.objects;
DROP POLICY IF EXISTS "Admins can delete teacher cvs" ON storage.objects;
DROP POLICY IF EXISTS "Admins can update teacher cvs" ON storage.objects;

CREATE POLICY "Admins can read teacher cvs" ON storage.objects
  FOR SELECT TO authenticated
  USING (bucket_id = 'teacher-cvs' AND private.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update teacher cvs" ON storage.objects
  FOR UPDATE TO authenticated
  USING (bucket_id = 'teacher-cvs' AND private.has_role(auth.uid(), 'admin'))
  WITH CHECK (bucket_id = 'teacher-cvs' AND private.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete teacher cvs" ON storage.objects
  FOR DELETE TO authenticated
  USING (bucket_id = 'teacher-cvs' AND private.has_role(auth.uid(), 'admin'));