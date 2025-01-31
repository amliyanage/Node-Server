import {useState} from "react";
import {Button, TextField} from "@mui/material";

export function Login() {

    const [register_username, setRegisterUsername] = useState('');
    const [register_password, setRegisterPassword] = useState('');

    const [login_username, setLoginUsername] = useState('');
    const [login_password, setLoginPassword] = useState('');

    return (
        <>
            <div>
                <h2>Register</h2><br/>
                <TextField type="text" placeholder='username' onChange={(e)=>setRegisterUsername(e.target.value)}/><br/>
                <TextField type="password" placeholder='password' onChange={(e) =>setRegisterPassword(e.target.value)}/><br/>
                <Button>Register</Button>
            </div>

            <div>
                <h2>Login</h2><br/>
                <TextField type="text" placeholder='username' onChange={(e) =>setLoginUsername(e.target.value)}/><br/>
                <TextField type="password" placeholder='password' onChange={(e)=>setLoginPassword(e.target.value)}/><br/>
                <Button >Login</Button>
            </div>
            {login_username+ ' '+ login_password} <br/>
            {register_username + ' '+ register_password}
        </>
    );
}