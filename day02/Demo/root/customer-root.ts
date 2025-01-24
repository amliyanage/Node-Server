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
    getAllCustomers().then(customers => {
        res.json(customers);
    }).catch(e => {
        res.status(500).send("Error fetching customers");
    });
});

router.get("/geByName/:name", (req, res) => {
    const name:string = req.params.name as string;
    getCustomerByName(name).then(customer => {
        res.json(customer);
    }).catch(e => {
        res.status(500).send("Error fetching customer");
    });
});

router.post("/", (req, res) => {
    const customer = req.body;
    console.log(customer);
    addCustomer(customer).then(r => {
        res.status(201).send("Customer added successfully");
    }).catch(e => {
        res.status(500).send("Error adding customer");
    });
});



router.delete("/delete/:name", (req, res) => {
    const name = req.params.name;
    deleteCustomer(name).then(r => {
        res.status(200).send("Customer deleted successfully");
    }).catch(e => {
        res.status(500).send("Error deleting customer");
    });
});

export default router;