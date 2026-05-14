export default function HeroImage({ className = '', objectPosition = 'center', priority = false }) {
  return (
    <picture>
      <source
        media="(max-width: 768px)"
        srcSet="/outside-sm.webp"
        type="image/webp"
      />
      <source
        srcSet="/outside.webp"
        type="image/webp"
      />
      <img
        src="/outside.png"
        alt="Vaznik Farm House at golden hour"
        className={className}
        style={{ objectPosition }}
        width="1920"
        height="1597"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
      />
    </picture>
  )
}
