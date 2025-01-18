import express from 'express';
import customerRoot from "./root/customer-root";

const app = express();

app.use("/customer", customerRoot)

app.listen(3000, (Error ) => {
    console.log('Server is running on port 3000');
});