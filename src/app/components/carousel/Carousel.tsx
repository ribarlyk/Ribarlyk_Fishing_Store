import Image from "next/image";

function Carousel() {
  return (
    <div className="flex w-auto h-auto md:mt-5 md:mx-40">
      <Image
        src="https://dvxs8unt9ljwj.cloudfront.net/evastide-2024-site.webp"
        alt="carousel-2"
        width={1920}
        height={1024}
      />
    </div>
  );
}

export default Carousel;
