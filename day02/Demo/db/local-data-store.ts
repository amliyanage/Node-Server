import {Customer} from "../root/model/CustomerModel";
import {PrismaClient} from '@prisma/client'

const customerList: Customer[] = [];

const prisma = new PrismaClient()

export const addCustomer = async (customer: Customer) => {
    try{
        const newCustomer = await prisma.customer.create({
            data: {
                customerName: customer.customerName,
                customerAge: customer.customerAge,
                customerCity: customer.customerCity,
                customerEmail: customer.customerEmail
            }
        })
        console.log(newCustomer)
    }catch (e) {
        console.log(e)
    }
}

export const getAllCustomers = async () => {
    try {
        return await prisma.customer.findMany()
    } catch (e) {
        console.log(e)
    }
}

export const getCustomerByName = async (name: string) => {
    try {
        return await prisma.customer.findFirst({
            where: {
                customerName: name
            }
        })
    }catch (e) {
        console.log(e)
    }
}

export const updateCustomer = async (customer: Customer) => {
    try {
        const updatedCustomer = await prisma.customer.findFirst(
            {
                where: {
                    customerName: customer.customerName
                }
            }
        )
        prisma.customer.update({
            where: {
                customerId: updatedCustomer?.customerId
            },
            data: {
                customerAge: customer.customerAge,
                customerCity: customer.customerCity,
                customerEmail: customer.customerEmail
            }
        })
    } catch (e) {
        console.log(e)
    }
}

export const deleteCustomer =async (name: string) => {
    return prisma.customer.deleteMany({
        where: {
            customerName: name
        }
    });
}