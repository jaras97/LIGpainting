import { getGallery } from "@/actions/get-gallery";
import { GalleryComponent } from "@/components/gallery/GalleryComponent";

export default async function GalleryPage() {
  const galleryList = await getGallery();

  return (
    <div className="md:px-40 flex flex-1 justify-center py-5">
      {/* <GalleryComponent galleryList={galleryList ? galleryList : []} /> */}
    </div>
  );
}
