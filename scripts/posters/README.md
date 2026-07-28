# قوالب الإعلانات المؤسسية — Lighthouse Campus

قالب موحّد لإنشاء إعلانات جديدة (تسجيل، وظائف، فعاليات…) بنفس تنسيق الإعلانات
المعتمدة، مع **تبديل المحتوى فقط** و**الحفاظ على الشعار الرسمي بلا أي تعديل**.

## الملفات

| الملف | الوظيفة |
| --- | --- |
| `poster-template.html` | التنسيق المعتمد (الترويسة، الشبكة، المراحل، الشريط الذهبي، التذييل). لا يُعدَّل عند إنشاء إعلان جديد. |
| `generate-poster.py` | مولّد الإعلان: يحقن الشعار الرسمي والمحتوى ثم يصدّر PNG + WebP بمقاس 1024×1536. |
| `content/*.json` | ملفات المحتوى — هنا فقط تُكتب النصوص. |

## إنشاء إعلان جديد

1. انسخ أقرب ملف محتوى:
   `cp scripts/posters/content/admissions-2026-2027.json scripts/posters/content/<اسم-جديد>.json`
2. عدّل النصوص و`output` (اسم الملف الناتج داخل `public/`).
3. ضع صورة الإعلان في `public/posters/` وأشِر إليها في `photo` (أو اجعلها `null`).
4. ولّد الإعلان:

```bash
npm run poster -- scripts/posters/content/<اسم-جديد>.json
```

الناتج: `public/<output>.png` و`public/<output>.webp`.

5. أضف اسم الملف إلى `ALLOWED_PUBLIC_IMAGES` في `scripts/audit-logo.mjs`، ثم:

```bash
npm run audit:logo
```

## حقول المحتوى

| الحقل | الوصف |
| --- | --- |
| `output` | اسم الملف الناتج (بدون امتداد) |
| `title` / `subtitle` | العنوان الرئيسي (يدعم `<span class="gold">` للتمييز الذهبي) |
| `lede` | سطر تمهيدي |
| `cta` / `ctaNote` | زر الدعوة والملاحظة أسفله |
| `locality` / `localityNote` | الموقع |
| `photo` | مسار الصورة داخل المشروع أو `null` |
| `listTitle` / `list[]` | العنوان وقائمة العناصر (`title`, `note`) |
| `bullets[]` | نقاط إضافية (للإعلانات الوظيفية) |
| `stagesTitle` / `stages[]` | المراحل (`title`, `en`, `note`) |
| `strip[]` | الشريط الكحلي السفلي (`title`, `note`) |
| `email` / `phone` / `address` / `website` / `promise` | بيانات التذييل |

## قاعدة الشعار

الشعار يُحمَّل دائمًا من الأصل المعتمد الوحيد
`src/assets/lighthouse-official-logo.png.asset.json`. يرفض المولّد العمل إذا
تغيّر معرّف الأصل، ويمنع تدقيق `npm run audit:logo` أي شعار آخر داخل المشروع.
ممنوع قص الشعار أو إعادة تلوينه أو توليد نسخة بديلة منه.
