"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CarpLoader() {
  return (
    <div className="flex items-center justify-center h-screen w-screen overflow-hidden">
      <motion.div
        animate={{
          x: [-75, 75, -75],
          y: [0, -10, 0],
          rotate: [-5, 5, -5],
          rotateY: [0, 180, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="https://dvxs8unt9ljwj.cloudfront.net/1_3_i_753.png"
          alt="Loading..."
          width={120}
          height={120}
          className="filter invert-0 sepia-1 saturate-2 hue-rotate-180 brightness-50 opacity-90"
        />
      </motion.div>
    </div>
  );
}
