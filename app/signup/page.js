import {useState} from 'react'
import Link from 'next/link'
import styles from '../styles/page.module.css'

export default function Signup() {
    //Set the form states
    const  [firstname, setFirstname] = useState('');
    const  [lastname, setLastname] = useState('');
    const  [email, setEmail] = useState('');
    const  [password, setPassword] = useState('');

    //Function to send a post request to the register api
    const register = async(e) => {
        e.preventDefault();

        try{
            const response = await fetch('/api/apiRoutes/register',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({firstname, lastname, email,password})
            })

        }catch (error){

        }
    }
    return (
        <div className={styles.body}>
            <h1>Signup</h1>
            <div className={styles.main}>
                <form className={styles.signup}>
                    <label for="firstname">First Name:</label>
                    <input type="text" placeholder="Enter first name" id="firstname" onChange={setFirstname(e.target.value)} required/>
                    <br/><br/>
                    <label for="lastname">Last Name:</label>
                    <input type="text" placeholder="Enter last name" id="lastname" onChange={setLastname(e.target.value)} required/>
                    <br/><br/>
                    <label for="email">Email: </label>
                    <input type="email" placeholder="Enter email" id="email" onChange={setEmail(e.target.value)} required/>
                    <br/><br/>
                    <label for="password">Password:</label>
                    <input type="password" placeholder="Enter password" id="password" onChange={setPassword(e.target.value)} required/>
                    <br></br>
                    <button className={styles.button}>Submit</button>
                </form>
            </div>

            <div className={styles.text}>
                <p> Already have an account, login.</p>
            </div>
        </div>
    );
}