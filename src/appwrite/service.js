import { ID, Client, Account } from "appwrite"
import { conf } from "../../config"
import Snackbar from "react-native-snackbar"


const appwriteClient = Client()


class AppwriteService {
    account;

    constructor() {
        appwriteClient
            .setEndpoint(conf.APPWRITE_ENDPOINT)
            .setProject(conf.APPWRITE_PROJECT_ID);

        this.account = new Account(appwriteClient)
    }

    async CreateAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(
                ID.unique,
                email,
                password,
                name
            )
            if (userAccount) {
                return this.Login({ email, password })
            }
            else {
                return userAccount;
            }
        } catch (error) {
            Snackbar.show({
                text: error,
                duration: Snackbar.LENGTH_LONG
            })
            console.log("Appwrite Service :: createAccount() :: " + error)
        }

    }
    async Login({email,password}){
        try{
        return await this.account.createEmailPasswordSession(
            email,
            password
        )
        }
        catch(error){
        Snackbar.show({
            text:error,
            duration:Snackbar.LENGTH_LONG
        })
        console.log("Appwrite Service :: Login() ::" + error)    
        }
    }

    async getCurrentUser(){
        try{
        return this.account.get()
        }
        catch(error){
            console.log("Appwrite Service :: getCurrentUser" + error)
        }
    }
    
    async Logout(){
        try{
        return this.account.deleteSession("current")
        }
        catch(error){
        console.log("Appwrite Service :: Logout" + error)
        }
    }
}

export default AppwriteService