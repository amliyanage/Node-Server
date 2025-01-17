import {Customer} from "../root/model/CustomerModel";

const customerList: Customer[] = [];

export const addCustomer = (customer: Customer) => {
    customerList.push(customer);
}

export const getAllCustomers = () => {
    return customerList;
}

export const getCustomerByName = (name: string) => {
    return customerList.filter(customer => customer.customerName === name);
}

export const updateCustomer = (customer: Customer) => {
    const index = customerList.findIndex(c => c.customerName === customer.customerName);
    if (index !== -1) {
        customerList[index] = customer;
    }
}

export const deleteCustomer = (name: string) => {
    const index = customerList.findIndex(customer => customer.customerName === name);
    if (index !== -1) {
        customerList.splice(index, 1);
    }
}