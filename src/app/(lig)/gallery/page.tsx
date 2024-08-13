import { getGallery } from "@/actions/get-gallery";
import GalleryCategory from "@/components/gallery/GalleryCategory";
import GalleryItem from "@/components/gallery/GalleryItem";
import React from "react";

const categories = ["All", "Residential", "Commercial", "Exterior", "Interior"];
const galleryItems = [
  {
    imageUrl:
      "https://cdn.usegalileo.ai/sdxl10/562d43e5-c0ca-4362-9223-88ad3ae7e366.png",
    title: "Modern Residential House Painting",
  },
  {
    imageUrl:
      "https://cdn.usegalileo.ai/sdxl10/32c0e20d-142a-49df-9a41-c30ad6952c90.png",
    title: "Commercial Building Exterior Painting",
  },
  {
    imageUrl:
      "https://cdn.usegalileo.ai/sdxl10/562d43e5-c0ca-4362-9223-88ad3ae7e366.png",
    title: "Modern Residential House Painting",
  },
  {
    imageUrl:
      "https://cdn.usegalileo.ai/sdxl10/32c0e20d-142a-49df-9a41-c30ad6952c90.png",
    title: "Commercial Building Exterior Painting",
  },
  // Agrega más elementos según sea necesario
];

export default async function GalleryPage() {
  const imageUrl = await getGallery();
  return (
    <div className="md:px-40 flex flex-1 justify-center py-5">
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
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {imageUrl?.map((item, index) => (
            <GalleryItem
              key={index}
              imageUrl={item.imageUrl}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
