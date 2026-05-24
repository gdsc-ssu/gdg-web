"use client";

import Image from "next/image";
import { useState } from "react";

interface ProfileImageProps {
  src: string | undefined;
  alt: string;
}

const DEFAULT_PROFILE_IMAGE = "/icons/member_picture_default.svg";

export default function ProfileImage({ src, alt }: ProfileImageProps) {
  const [imageSrc, setImageSrc] = useState(src || DEFAULT_PROFILE_IMAGE);
  const fallbackToDefaultImage = () => {
    if (imageSrc !== DEFAULT_PROFILE_IMAGE) {
      setImageSrc(DEFAULT_PROFILE_IMAGE);
    }
  };

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      sizes="100%"
      className="object-cover rounded-full"
      quality={75}
      onError={fallbackToDefaultImage}
    />
  );
}
