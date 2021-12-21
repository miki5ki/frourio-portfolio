/*
  Warnings:

  - Added the required column `like` to the `Topic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Topic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Topic" ADD COLUMN     "like" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;
