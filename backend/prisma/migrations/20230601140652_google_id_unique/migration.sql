/*
  Warnings:

  - A unique constraint covering the columns `[googleId]` on the table `Teacher` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Teacher_googleId_key" ON "Teacher"("googleId");
