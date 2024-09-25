import {Client, Account, OAuthProvider} from 'appwrite'

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

export const signup = async (userId, email, password, firstname) => {

    try {
        await account.create(userId, email, password, firstname)
    } catch (error){
        console.log(`error registering user, ${error.message}`)
    }
}


export const login = async (email, password) => {
    return new Promise((resolve, reject) => {
        account.createEmailPasswordSession(email, password)
            .then(() => {
                account.get()
                    .then(user => resolve(user))
                    .catch(error => reject(error));
                // resolve('Login successful');
            })
            .catch(error => reject(error));
    });
};

export const logout = async () => {
    try{
        await account.deleteSession('current') // delete the current session
    } catch (error) {
        console.log(`Error logging out ${error.message}`)
    }
}

export const oauthlogin = async () => {
    try{
        account.createOAuth2Session(
            OAuthProvider.Google,
            'http://localhost:3000/home',
            'http://localhost:3000/signup'
        )
    } catch (error) {
        consol.log(error)
    }
}