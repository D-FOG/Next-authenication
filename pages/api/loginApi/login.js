import {Client, Account} from 'appwrite';
import {login} from '../../../lib/config'
// Fetch endpoint, project ID, and API key from environment variables
// const endpoint = process.env.Appwrite_Endpoint;
// const projectId = process.env.Appwrite_Project_ID;
// const apiKey = process.env.Appwrite_API_KEY;

// console.log(endpoint, projectId)

// // Configure Appwrite client
// const client = new Client();

// //.setKey(apiKey);

// const account = new Account(client);
// export {account, client}

// //console.log(account);
// client
//     .setEndpoint(endpoint)
//     .setProject(projectId)


export default async function handler(req, res){
    if (req.method === "POST"){
        const {loginDetail} = req.body;
        const {email, password} = loginDetail;
        console.log(loginDetail);
        console.log(email, password);

        try {
            const user = await login(email, password)
        console.log(`this user ${user} `)
        res.status(200).json(user);
        } catch (error) {
        res.status(400).json({ message: 'Failed to login', error });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}