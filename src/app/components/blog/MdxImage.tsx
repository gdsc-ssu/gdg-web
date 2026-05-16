import Image from 'next/image'

interface MdxImageProps {
  src?: string
  alt?: string
}

export default function MdxImage({ src, alt }: MdxImageProps) {
  if (!src) return null

  return (
    <span className="block relative w-full my-6">
      <Image
        src={src}
        alt={alt ?? ''}
        width={800}
        height={450}
        style={{ width: '100%', height: 'auto' }}
        className="rounded-xl"
        sizes="(max-width: 768px) 100vw, 800px"
      />
    </span>
  )
}
