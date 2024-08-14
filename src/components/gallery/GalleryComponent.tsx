"use client";

import React, { useState } from "react";
import GalleryCategory from "./GalleryCategory";
import GalleryItem from "./GalleryItem";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { SeedGalleryItem } from "@/seed/seed";

const categories = ["All", "Residential", "Commercial", "Exterior", "Interior"];

interface Props {
  galleryList: SeedGalleryItem[];
}

export const GalleryComponent = ({ galleryList }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleOpenLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight">
            Our Work
          </p>
          <p className="text-[#637588] text-sm font-normal leading-normal">
            We are proud of the work we do and the quality of the services we
            provide. Here is a selection of some of our latest projects.
          </p>
        </div>
      </div>
      <div className="flex gap-3 p-3 flex-wrap pr-4">
        {categories.map((category) => (
          <GalleryCategory key={category} label={category} />
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4">
        {galleryList?.map((item: SeedGalleryItem, index: number) => (
          <GalleryItem
            key={index}
            imageUrl={item.imageUrl}
            title={item.title}
            onClick={() => handleOpenLightbox(index)}
          />
        ))}
      </div>
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={galleryList.map((item: SeedGalleryItem) => ({
          src: item.imageUrl,
        }))}
        index={photoIndex}
      />
    </div>
  );
};
