/*
  Warnings:

  - The primary key for the `customer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cutomerId` on the `customer` table. All the data in the column will be lost.
  - Added the required column `customerId` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `customer` DROP PRIMARY KEY,
    DROP COLUMN `cutomerId`,
    ADD COLUMN `customerId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`customerId`);
