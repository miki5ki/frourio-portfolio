/*
  Warnings:

  - Added the required column `createdAt` to the `Topic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `Topic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Topic" ADD COLUMN     "createdAt" TEXT NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL;
