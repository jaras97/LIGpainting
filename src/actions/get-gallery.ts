"use server";

import prisma from "@/lib/prisma";

export const getGallery = async () => {
  try {
    const galleryList = await prisma.gallery.findMany();

    if (!galleryList) return null;
    return galleryList;
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener la galeria");
  }
};
