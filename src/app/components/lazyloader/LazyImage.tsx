"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function LazyImage({
  src,
  alt,
  width,
  height,
  placeholder,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  placeholder: any;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} style={{ minHeight: height }}>
      {isVisible && (
        <Image
          src={src}
          alt={alt}
          placeholder={placeholder}
          width={width}
          height={height}
          loading="lazy"
        />
      )}
    </div>
  );
}
