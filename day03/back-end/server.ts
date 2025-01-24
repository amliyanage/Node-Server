import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.use("/", (req: Request, res: Response , next)=> {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next()
})

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
})

app.post("/saveCustomer", (req: Request, res: Response) => {
    console.log(req.body);
    res.send("Customer saved successfully");
})

app.get("/getAllCustomers", (req: Request, res: Response) => {
    res.send([{ 'id': '1' , 'name': 'John Doe' , 'email': 'jhon@gmail.com'}]);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})