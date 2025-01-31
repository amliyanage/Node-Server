import express from 'express';
import userRouter from "./route/user-router";

const app = express();

app.use(express.json())
app.use('/',(req , res , next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');

    next();
})

app.use('/' , userRouter)


app.listen(3003,()=>{
    console.log("Server running on port 3003");
})