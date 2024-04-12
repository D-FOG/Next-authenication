"use client"
import Link from 'next/link'
import styles from '../styles/page.module.css'
import { useState } from 'react';

export default function Home() {
   const [loginDetail, setDetails] = useState({
    email: '',
    password: '',
   });

    const handleData = (e) => {
        e.preventDefault();

        const {name, value} = e.target;

        setDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    }   

   const login = async(e) => {
    e.preventDefault();

    try {
        const response = await fetch('/api/loginApi/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({loginDetail})
        })

        if (response.ok) {
            const data = await response.json()
            console.log('The response:', data)
        } else {
            const data = await response.json();
            console.log(data.error);
        }
    } catch(error){
        console.log(`An error occured ${error}`);
    }
   }
console.log(loginDetail);
    return (
        <div className={styles.body}>
            <h1>Login</h1>
            <div className={styles.main}>
                <form className={styles.signup} onSubmit={login}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" placeholder="Enter email" id="email" name="email" onChange={handleData} required/>
                    <br/><br/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" placeholder="Enter password" id="password" name="password" onChange={handleData} required/>
                    <br></br>
                    <button className={styles.button}>Submit</button>
                </form>
            </div>

            <div className={styles.text}>
                <p> Don't have an account, signup.</p>
            </div>
        </div>
    );
}