/*
  Warnings:

  - You are about to drop the column `customer_age` on the `customer` table. All the data in the column will be lost.
  - You are about to drop the column `customer_city` on the `customer` table. All the data in the column will be lost.
  - You are about to drop the column `customer_email` on the `customer` table. All the data in the column will be lost.
  - You are about to drop the column `customer_name` on the `customer` table. All the data in the column will be lost.
  - Added the required column `age` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `customer` DROP COLUMN `customer_age`,
    DROP COLUMN `customer_city`,
    DROP COLUMN `customer_email`,
    DROP COLUMN `customer_name`,
    ADD COLUMN `age` INTEGER NOT NULL,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
