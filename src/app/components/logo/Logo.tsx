import Image from "next/image";
function Logo() {
  return (
    <>
      <Image
        src="https://dvxs8unt9ljwj.cloudfront.net/small-logo-transformed.webp"
        alt="logo"
        width={120}
        height={120}
      />
    </>
  );
}

export default Logo;
