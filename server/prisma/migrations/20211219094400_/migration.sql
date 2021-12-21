-- CreateTable
CREATE TABLE "Topic" (
    "id" SERIAL NOT NULL,
    "tag" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    PRIMARY KEY ("id")
);
