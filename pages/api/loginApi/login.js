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
    if (req.method === "POST"){
        const {loginDetail} = req.body;
        const {email, password} = loginDetail;
        console.log(loginDetail);
        console.log(email, password);

        try{
            const response = account.createEmailSession(email, password);
            //const email = loginDetails.email;
            //const password = loginDetails.password;
            console.log(response);
            res.status(200).json({session: 'successful'});
        }catch(error){
            res.status(500).json({error: error});
        }
    }
}