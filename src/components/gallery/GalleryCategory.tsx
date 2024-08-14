import React from "react";

interface GalleryCategoryProps {
  label: string;
}

const GalleryCategory: React.FC<GalleryCategoryProps> = ({ label }) => {
  return (
    <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f4] pl-4 pr-4">
      <p className="text-[#111418] text-sm font-medium leading-normal">
        {label}
      </p>
    </div>
  );
};

export default GalleryCategory;
