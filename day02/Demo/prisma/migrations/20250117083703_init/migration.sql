/*
  Warnings:

  - You are about to drop the column `age` on the `customer` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `customer` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `customer` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `customer` table. All the data in the column will be lost.
  - Added the required column `customerAge` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerCity` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerEmail` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerName` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `customer` DROP COLUMN `age`,
    DROP COLUMN `city`,
    DROP COLUMN `email`,
    DROP COLUMN `name`,
    ADD COLUMN `customerAge` INTEGER NOT NULL,
    ADD COLUMN `customerCity` VARCHAR(191) NOT NULL,
    ADD COLUMN `customerEmail` VARCHAR(191) NOT NULL,
    ADD COLUMN `customerName` VARCHAR(191) NOT NULL;
