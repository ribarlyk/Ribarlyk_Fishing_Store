import Image from "next/image";

function Carousel() {
  return (
    <>
      <Image
        className="h-2/6"
        src="https://dvxs8unt9ljwj.cloudfront.net/evastide-2024-site.webp"
        alt="carousel-1"
        width={1920}
        height={1024}
      />
    </>
  );
}

export default Carousel;
