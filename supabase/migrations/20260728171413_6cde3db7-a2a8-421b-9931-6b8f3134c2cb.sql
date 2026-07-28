CREATE TABLE public.teacher_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  subject text NOT NULL,
  qualification text NOT NULL,
  experience_years text NOT NULL,
  message text,
  cv_path text,
  cv_filename text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.teacher_applications TO service_role;

ALTER TABLE public.teacher_applications ENABLE ROW LEVEL SECURITY;