/*
  Warnings:

  - Added the required column `tag` to the `Topic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Topic" ADD COLUMN     "tag" TEXT NOT NULL;
