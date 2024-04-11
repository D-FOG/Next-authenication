
// Import Appwrite
//import { Client, Databases, ID } from 'node-appwrite';

import {Client, Account} from 'appwrite';

// Fetch endpoint, project ID, and API key from environment variables
const endpoint = process.env.Appwrite_Endpoint;
const projectId = process.env.Appwrite_Project_ID;
const apiKey = process.env.Appwrite_API_KEY;

// Configure Appwrite client
const client = new Client();

//.setKey(apiKey);

const account = new Account(client);
client
    .setEndpoint(endpoint)
    .setProject(projectId)

export default async function handler(req, res){
    // Define the generateUserId function within the handler function
    function generateUserId() {
        const validChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-_';
        let userId = '';

        for (let i = 0; i < 36; i++) {
            const randomIndex = Math.floor(Math.random() * validChars.length);
            userId += validChars[randomIndex];
        }

        if (/^[^a-zA-Z0-9]/.test(userId)) {
            userId = validChars[Math.floor(Math.random() * 62)] + userId.substring(1);
        }

        return userId;
    }

    if (req.method === "POST"){
        const userId = generateUserId();
        const {firstname, lastname, email, password} = req.body;
        console.log(firstname, lastname, email, password, userId);
        try {
            const newUser = account.create(userId, email, password, firstname, lastname);
            console.log(newUser);
            res.status(200).json({success: `User account created successfully.`})
        }catch(error){
            console.log('from the server', error.message);
            res.status(500).json({error: error})
        }
    }
}
