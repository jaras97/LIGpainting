import { initialData } from "./seed";
import prisma from "../lib/prisma";
import { config } from "dotenv";
config();

async function main() {
  await prisma.gallery.deleteMany();

  const { GalleryItem } = initialData;

  await prisma.gallery.createMany({
    data: GalleryItem,
  });

  console.log("Ejecutado correctamente");
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
})();
