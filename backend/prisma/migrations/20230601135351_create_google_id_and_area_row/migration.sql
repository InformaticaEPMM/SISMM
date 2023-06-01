/*
  Warnings:

  - Added the required column `area` to the `Meet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `googleId` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Meet" ADD COLUMN     "area" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "googleId" TEXT NOT NULL;
