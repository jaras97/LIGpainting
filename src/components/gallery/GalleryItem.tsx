import React from "react";
import Image from "next/image";

interface GalleryItemProps {
  imageUrl: string;
  title: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ imageUrl, title }) => {
  return (
    <div className="flex flex-col gap-3 pb-3">
      <div className="relative w-full aspect-square rounded-xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <p className="text-[#111418] text-base font-medium leading-normal">
        {title}
      </p>
    </div>
  );
};

export default GalleryItem;
