/*
  Warnings:

  - You are about to drop the column `age` on the `customer` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `customer` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `customer` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `customer` table. All the data in the column will be lost.
  - Added the required column `customer_age` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_city` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_email` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer_name` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `customer` DROP COLUMN `age`,
    DROP COLUMN `city`,
    DROP COLUMN `email`,
    DROP COLUMN `name`,
    ADD COLUMN `customer_age` INTEGER NOT NULL,
    ADD COLUMN `customer_city` VARCHAR(191) NOT NULL,
    ADD COLUMN `customer_email` VARCHAR(191) NOT NULL,
    ADD COLUMN `customer_name` VARCHAR(191) NOT NULL;
