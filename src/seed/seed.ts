export interface SeedGalleryItem {
  imageUrl: string;
  title: string;
  createdAt: Date;
  type: ValidTypes;
}

type ValidTypes = "INTERIOR" | "EXTERIOR" | "RESIDENTIAL" | "COMMERCIAL";

interface SeedData {
  GalleryItem: SeedGalleryItem[];
}

export const initialData: SeedData = {
  GalleryItem: [
    {
      imageUrl:
        "https://aws-ligpainting.s3.us-east-2.amazonaws.com/WhatsApp+Image+2024-07-27+at+3.10.38+PM.jpeg",
      title: "Imagen de prueba",
      type: "INTERIOR",
      createdAt: new Date(1723588301000),
    },
    {
      imageUrl:
        "https://aws-ligpainting.s3.us-east-2.amazonaws.com/WhatsApp+Image+2024-07-27+at+3.10.38+PM.jpeg",
      title: "Imagen de prueba",
      type: "EXTERIOR",
      createdAt: new Date(1723588301000),
    },

    {
      imageUrl:
        "https://cdn.usegalileo.ai/sdxl10/562d43e5-c0ca-4362-9223-88ad3ae7e366.png",
      title: "Imagen de prueba",
      type: "EXTERIOR",
      createdAt: new Date(1723588301000),
    },

    {
      imageUrl:
        "https://cdn.usegalileo.ai/sdxl10/562d43e5-c0ca-4362-9223-88ad3ae7e366.png",
      title: "Imagen de prueba",
      type: "RESIDENTIAL",
      createdAt: new Date(1723588301000),
    },
    {
      imageUrl:
        "https://cdn.usegalileo.ai/sdxl10/562d43e5-c0ca-4362-9223-88ad3ae7e366.png",
      title: "Imagen de prueba",
      type: "COMMERCIAL",
      createdAt: new Date(1723588301000),
    },
    {
      imageUrl:
        "https://cdn.usegalileo.ai/sdxl10/562d43e5-c0ca-4362-9223-88ad3ae7e366.png",
      title: "Imagen de prueba",
      type: "COMMERCIAL",
      createdAt: new Date(1723588301000),
    },
  ],
};
