import Link from 'next/link'
import styles from '../styles/page.module.css'

export default function Home() {
    return (
        <div className={styles.body}>
            <h1>Signup</h1>
            <div className={styles.main}>
                <form className={styles.signup}>
                    <label for="firstname">First Name:</label>
                    <input type="text" placeholder="Enter first name" id="firstname" required/>
                    <br/><br/>
                    <label for="lastname">Last Name:</label>
                    <input type="text" placeholder="Enter last name" id="lastname" required/>
                    <br/><br/>
                    <label for="email">Email: </label>
                    <input type="email" placeholder="Enter email" id="email" required/>
                    <br/><br/>
                    <label for="password">Password:</label>
                    <input type="password" placeholder="Enter password" id="password" required/>
                    <br></br>
                    <input type="password" placeholder="Confirm password"/>
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