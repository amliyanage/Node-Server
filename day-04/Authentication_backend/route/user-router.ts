import express from "express";
import {User} from "../model/User";
import {loginUser, registerUser} from "../database/database-data-user";

const router = express.Router()

router.post("/add", async (req,res) => {
    const user : User = req.body
    try {
        const saveUser = await registerUser(user)
        res.json(user)
    } catch (err){
        console.log("failed user register : " , err)
        res.status(400).send("failed register user")
    }
})

router.post("/login" , async (req,res) => {
    const user : User = req.body
    try{
        const logged = await loginUser(user)
        res.json(logged)
    } catch (err){
        console.log("failed login : " , err)
        res.status(400).send("login failed")
    }
})

export default router