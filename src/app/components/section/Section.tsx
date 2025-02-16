"use client";

import Image from "next/image";
import { SECTIONS_TO_PATHS } from "@/types/Products";
import { useRouter } from "next/navigation";

type SectionProps = {
  title: keyof typeof SECTIONS_TO_PATHS;
  image: string;
};

function Section({ title, image }: SectionProps) {
  const router = useRouter();

  return (
    <div>
      <button
        className="relative"
        onClick={() => router.push(SECTIONS_TO_PATHS[title])}
      >
        <Image
          src={image}
          alt={"секция - " + title}
          layout="fixed"
          width={500}
          height={400}
        />
        <span className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-75 text-white font-semibold text-xl p-2 text-center tracking-wider">
          {title}
        </span>
      </button>
    </div>
  );
}

export default Section;
