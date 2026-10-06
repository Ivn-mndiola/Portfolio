import variants from '../data/imageVariants.json'

// Preserve the supplied artwork's native detail, including lettering and logos.
// Galleries can still supply their own srcSet and sizes for responsive photos.
export default function ResponsiveImage({ src, srcSet, sizes, width, height, loading = 'lazy', decoding = 'async', ...props }) {
  const image = variants[src]
  return <img
    {...props}
    src={src}
    srcSet={srcSet}
    sizes={srcSet ? (sizes || '100vw') : undefined}
    width={width || image?.width}
    height={height || image?.height}
    loading={loading}
    decoding={decoding}
  />
}
