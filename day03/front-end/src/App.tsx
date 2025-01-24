import {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios';

function App() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    const api = axios.create({
        baseURL: 'http://localhost:3000/'
    })

    useEffect(() => {
        console.log("useEffect triggered:::");

        async function saveCustomer() {
            const customer = { 'id': '1' , 'name': 'John Doe' , 'email': 'john@gmail.com'}
            const response = await api.post('/saveCustomer', customer)
            console.log(response.data);
        }

        async function getCustomer() {
            const response = await api.get('/getAllCustomers')
            console.log(response.data);
        }

        saveCustomer()
        getCustomer()

    }, [count,count2])

    return (
        <>
            <button onClick={() => setCount(count+1)}>Count:: {count}</button>
            <br/>
            <br/>
            <button onClick={() => setCount2(count2+1)}>Count:: {count2}</button>
        </>
    )
}

export default App;