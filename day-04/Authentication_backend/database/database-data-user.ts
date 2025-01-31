import { PrismaClient } from '@prisma/client';
import {User} from "../model/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient()

export async function registerUser(user : User){
    try{
        const hashedPassword = await bcrypt.hash(user.password, 10);

        const saveUser = await prisma.user.create({
            data : {
                userName : user.userName,
                password : hashedPassword
            }
        })
        console.log("save User Success : ", saveUser)
        return saveUser
    } catch (err){
        console.log("something wrong in the save user")
        throw err
    }
}

export async function loginUser(user : User){

    const security_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

    try {
        const findUser  = await prisma.user.findUnique({
            where : {
                userName : user.userName ,
            }
        })

        if (findUser || (await bcrypt.compare(findUser!.password, user.password)) ){
            const token = jwt.sign(user,security_key , { expiresIn : "1h" })
            return { "token" : token }
        } else {
            throw new Error("User not Found")
        }
    } catch (err){
        console.log("something wrong on login : " , err)
        throw err
    }
}