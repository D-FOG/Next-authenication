"use client"
import Link from 'next/link'
import styles from '../styles/page.module.css'
import { useState } from 'react';

export default function Home() {
   const [loginDetail, setDetails] = useState({
    email: '',
    password: '',
   });
console.log(loginDetail);
    return (
        <div className={styles.body}>
            <h1>Login</h1>
            <div className={styles.main}>
                <form className={styles.signup}>
                    <label for="email">Email: </label>
                    <input type="email" placeholder="Enter email" id="email" onChange={(e) => setDetails({...loginDetail, email: e.target.value}) } required/>
                    <br/><br/>
                    <label for="password">Password:</label>
                    <input type="password" placeholder="Enter password" id="password" onChange={(e) => setDetails({...loginDetail,password: e.target.value })} required/>
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