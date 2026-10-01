import variants from '../data/imageVariants.json'

// Render a plain image so the existing artwork positioning stays intact.
// Full-size originals remain available for download and photo lightboxes.
export default function ResponsiveImage({ src, srcSet, sizes, width, height, loading = 'lazy', decoding = 'async', ...props }) {
  const image = srcSet ? undefined : variants[src]
  return <img
    {...props}
    src={image?.src || src}
    srcSet={srcSet || image?.srcSet}
    sizes={sizes || (image ? '(max-width: 600px) calc(100vw - 40px), (max-width: 1200px) 80vw, 60vw' : undefined)}
    width={width || image?.width}
    height={height || image?.height}
    loading={loading}
    decoding={decoding}
  />
}
