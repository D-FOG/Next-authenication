//Import appwrite
import {Appwrite} from 'appwrite';

//Fetch enpoint and project ID from env
const endpoint = process.env.Appwrite_Endpoint;
const projectId = process.env.Appwrite_Project_ID;
console.log(endpoint, projectId);

//Configure appwrite
const appwriteConfig = new Appwrite();
appwriteConfig.setEndpoint(endpoint).setProject(projectId);

export default function handler(req, res) {
    if (req.method == 'post'){
        const {firstname, lastname, email, password} = req.body;

        try {
            //Create user in the database
            let user = appwriteConfig.account.create(firstname, lastname, email, password);

            res.status(200).json({user})
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    } else {
        res.status(405).json({error: 'Method not allowed'})
    }
}