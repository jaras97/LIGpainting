/*
  Warnings:

  - The `createdAt` column on the `Gallery` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `type` on the `Gallery` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "GalleryType" AS ENUM ('INTERIOR', 'EXTERIOR', 'RESIDENTIAL', 'COMMERCIAL');

-- AlterTable
ALTER TABLE "Gallery" DROP COLUMN "type",
ADD COLUMN     "type" "GalleryType" NOT NULL,
DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
