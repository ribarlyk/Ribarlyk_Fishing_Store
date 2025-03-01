"use client";
import { FaArrowCircleUp } from "react-icons/fa";
import { useState, useEffect } from "react";

function Lift() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scrollDuration = 500;
    const start = window.scrollY;
    const startTime = performance.now();

    const easeOutQuad = (t: number) => t * (2 - t);

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / scrollDuration, 1);
      const ease = easeOutQuad(progress);

      window.scrollTo(0, start * (1 - ease));

      if (timeElapsed < scrollDuration) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <>
      {isScrolled && (
        <div className="w-14 h-14 bg-blue-500 text-white rounded-full flex justify-center items-center cursor-pointer fixed bottom-4 right-4">
          <FaArrowCircleUp size={32} onClick={scrollToTop} />
        </div>
      )}
    </>
  );
}

export default Lift;
