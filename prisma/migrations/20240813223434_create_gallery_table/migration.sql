/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Gallery` table. All the data in the column will be lost.
  - Changed the type of `createdAt` on the `Gallery` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Gallery" DROP COLUMN "updatedAt",
DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" INTEGER NOT NULL;
