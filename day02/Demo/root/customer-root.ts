import express from "express";
import {
    addCustomer,
    deleteCustomer,
    getAllCustomers,
    getCustomerByName,
    updateCustomer
} from "../db/local-data-store";
import {Customer} from "./model/CustomerModel";
import bodyParser from "body-parser";

const router = express.Router();

router.use(bodyParser.json())

router.get("/", (req, res) => {
    res.json(getAllCustomers());
});

router.get("/geByName/:name", (req, res) => {
    const name = req.params.name;
    res.json(getCustomerByName(name));
});

router.post("/", (req, res) => {
    const customer = req.body;
    console.log(customer);
    addCustomer(customer);
    res.status(201).send("Customer added successfully");
});

router.put("/", (req, res) => {
    const customer: Customer = req.body;
    updateCustomer(customer);
    res.status(200).send("Customer updated successfully");
});

router.delete("/delete/:name", (req, res) => {
    const name = req.params.name;
    deleteCustomer(name);
    res.status(200).send("Customer deleted successfully");
});

export default router;