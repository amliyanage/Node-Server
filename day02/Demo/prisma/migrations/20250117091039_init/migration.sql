/*
  Warnings:

  - A unique constraint covering the columns `[customerName]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Customer_customerName_key` ON `Customer`(`customerName`);
