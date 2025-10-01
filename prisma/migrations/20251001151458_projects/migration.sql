-- CreateTable
CREATE TABLE "public"."Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "technologies" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "challenges" TEXT NOT NULL,
    "improvements" TEXT NOT NULL,
    "clientLink" TEXT NOT NULL,
    "serverLink" TEXT NOT NULL,
    "liveLink" TEXT NOT NULL,
    "features" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
