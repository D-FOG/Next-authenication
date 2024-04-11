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
    try{

    }catch(error){
        
    }
}