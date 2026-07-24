import type { ImgHTMLAttributes } from "react";

type PictureSources = {
  /** AVIF srcset string produced by vite-imagetools (`?...&format=avif&as=srcset`). */
  avif?: string;
  /** WebP srcset string produced by vite-imagetools. */
  webp?: string;
  /** JPEG/PNG fallback single URL. */
  fallback: string;
  /** Native `sizes` attribute — required for a responsive srcset to work. */
  sizes?: string;
};

type ResponsivePictureProps = PictureSources & {
  alt: string;
  imgClassName?: string;
  pictureClassName?: string;
  width?: number;
  height?: number;
  /** Set on the first paint image only. */
  fetchPriority?: "high" | "low" | "auto";
  loading?: ImgHTMLAttributes<HTMLImageElement>["loading"];
  decoding?: ImgHTMLAttributes<HTMLImageElement>["decoding"];
};

/**
 * <picture> wrapper that serves AVIF → WebP → JPEG in that order.
 * srcset variants are generated at build time by vite-imagetools;
 * callers pass the resolved srcset strings via the `avif`/`webp` props.
 */
export function ResponsivePicture({
  avif,
  webp,
  fallback,
  sizes = "100vw",
  alt,
  imgClassName,
  pictureClassName,
  width,
  height,
  fetchPriority,
  loading = "lazy",
  decoding = "async",
}: ResponsivePictureProps) {
  return (
    <picture className={pictureClassName}>
      {avif ? <source type="image/avif" srcSet={avif} sizes={sizes} /> : null}
      {webp ? <source type="image/webp" srcSet={webp} sizes={sizes} /> : null}
      <img
        src={fallback}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        className={imgClassName}
      />
    </picture>
  );
}
