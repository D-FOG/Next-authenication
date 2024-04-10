
// Import Appwrite
import { Client, Databases, ID } from 'node-appwrite';

// Fetch endpoint, project ID, and API key from environment variables
const endpoint = process.env.Appwrite_Endpoint;
const projectId = process.env.Appwrite_Project_ID;
const apiKey = process.env.Appwrite_API_KEY;

// Configure Appwrite client
const client = new Client();
client
    .setEndpoint(endpoint)
    .setProject(projectId)
    .setKey(apiKey);

// Define the name of the collection
const collectionName = 'Users';

// Create a Databases instance
const databases = new Databases(client);

// Prepare the database
async function prepareDatabase() {
    try {
        // Create TodosDB database
        const userDatabase = await databases.create(
            ID.unique(),
            'userDB'
        );

        // Create Todos collection
        const userCollection = await databases.createCollection(
            userDatabase.$id,
            ID.unique(),
            collectionName
        );

        // Create attributes
        await databases.createStringAttribute(
            userDatabase.$id,
            userCollection.$id,
            'firstname',
            255,
            true
        );

        await databases.createStringAttribute(
            userDatabase.$id,
            userCollection.$id,
            'lastname',
            255,
            true
        );

        await databases.createStringAttribute(
            userDatabase.$id,
            userCollection.$id,
            'email',
            255,
            true
        );

        await databases.createStringAttribute(
            userDatabase.$id,
            userCollection.$id,
            'password',
            255,
            true
        );

        console.log('Database prepared');
        await seedDatabase(userDatabase, userCollection);
    } catch (error) {
        console.error('Error preparing database:', error);
    }
}

async function seedDatabase(userDatabase, userCollection) {
    try {
        // Define initial user data
        const initialUserData = [
            {
                firstname: 'John',
                lastname: 'Doe',
                email: 'john@example.com',
                password: 'password123'
            },
            {
                firstname: 'Jane',
                lastname: 'Doe',
                email: 'jane@example.com',
                password: 'password456'
            }
            // Add more initial users as needed
        ];

        // Insert initial user data into the collection
        for (const userData of initialUserData) {
            await client.database.createDocument(
                collectionName,
                userData
            );
        }

        console.log('Database seeded with initial user data');
    } catch (error) {
        console.error('Error seeding database with initial user data:', error);
    }
}

// Call the function to prepare the database
prepareDatabase();

// Export the handler function
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstname, lastname, email, password } = req.body;

        try {
            // Insert data into the collection
            const userDB = await client.database.createDocument(collectionName, {
                "firstname": firstname,
                "lastname": lastname,
                "email": email,
                "password": password
            });

            // Respond with the inserted document
            res.status(200).json({ userDB });
        } catch (error) {
            // Handle errors
            console.error('Error inserting document:', error);
            res.status(500).json({ error: 'Error inserting document' });
        }
    } else {
        // Respond with Method Not Allowed for non-POST requests
        res.status(405).json({ error: 'Method not allowed' });
    }
}


// //Import appwrite
// import sdk from 'node-appwrite';

// //Fetch enpoint and project ID from env
// const endpoint = process.env.Appwrite_Endpoint;
// const projectId = process.env.Appwrite_Project_ID;
// const apiKey = process.env.Appwrite_API_KEY
// console.log(endpoint, projectId);
// //console.log(sdk)

// //Configure appwrite
// const client = new sdk.Client();
// client
//     .setEndpoint(endpoint)
//     .setProject(projectId)
//     .setKey(apiKey)

// export default async function handler(req, res) {
//     if (req.method === 'POST'){
//         const {firstname, lastname, email, password} = req.body;

//         try {
//             //Create user in the database
//             //let user = client.account.create(firstname, lastname, email, password);
//             // const userDB = new sdk.Databases(client);
//             // let prepareDatabase;

//             const userDB = await client.database.createDocument(collectionName, {
//                 "firstname": firstname,
//                 "lastname": lastname,
//                 "email": email,
//                 "password": password
//             });



//             res.status(200).json({userDB})
//         } catch (error) {
//             res.status(500).json({error: error})
//         }
//     } else {
//         res.status(405).json({error: 'Method not allowed'})
//     }
// }