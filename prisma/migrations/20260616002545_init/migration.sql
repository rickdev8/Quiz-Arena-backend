-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "nick" TEXT NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 0,
    "badges" TEXT[],
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_nick_key" ON "users"("nick");
