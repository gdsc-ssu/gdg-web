import Image from 'next/image'
import type { CSSProperties } from 'react'

interface MdxImageProps {
  src?: string
  alt?: string
  className?: string
  style?: CSSProperties
}

export default function MdxImage({ src, alt, className, style }: MdxImageProps) {
  if (!src) return null

  return (
    <Image
      src={src}
      alt={alt ?? ''}
      width={800}
      height={450}
      style={{ width: '100%', height: 'auto', marginTop: '1.5rem', marginBottom: '1.5rem', ...style }}
      className={`rounded-xl ${className ?? ''}`.trim()}
      sizes="(max-width: 768px) 100vw, 800px"
    />
  )
}
