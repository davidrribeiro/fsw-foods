import Image, { ImageProps } from "next/image";

const BannerPromo = (props: ImageProps) => {
  return (
    <Image
      height={0}
      width={0}
      className="w-full height-auto object-contain"
      sizes="100vw"
      quality={100}
      {...props}
    />
  );
};

export default BannerPromo;
