import Link from 'next/link'
import styles from '../styles/page.module.css'

export default function Home() {
    return (
        <div className={styles.body}>
            <h1>Login</h1>
            <div className={styles.main}>
                <form className={styles.signup}>
                    <label for="email">Email: </label>
                    <input type="email" placeholder="Enter email" id="email" required/>
                    <br/><br/>
                    <label for="password">Password:</label>
                    <input type="password" placeholder="Enter password" id="password" required/>
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