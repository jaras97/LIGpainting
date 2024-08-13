/*
  Warnings:

  - The primary key for the `Gallery` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id` on the `Gallery` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Gallery" DROP CONSTRAINT "Gallery_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Gallery_pkey" PRIMARY KEY ("id");
