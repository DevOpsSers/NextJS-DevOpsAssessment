import Head from "next/head"
import RecipeCreateForm from "../../components/RecipeCreateForm"
import { useMutation } from "react-query"
import Alert from "../../components/Alert";
import axios from "axios";
import { RecipeValues } from "../../components/RecipeCreateForm";
import useSession from "../hooks/useNextAuth"

export default function RecipesIndex() {

    const {isLoading, isSuccess, isError, mutate} = useMutation(
        (recipe : RecipeValues) => {
            return axios.post("/api/recipes", recipe, {
                withCredentials: true});
        }
    )
    //tutorial: https://www.youtube.com/watch?v=pJiRj02PkJQ&ab_channel=TheNetNinja
    
    const {data: session} = useSession()
    if(!session){
        return(
            <div className="flex justify-center items-center h-[100vh]">
                <h1>Unauthorised</h1>
            </div>
        )
    }

    return (
        <div>
            <Head>
            <title>Share Your Recipes!</title>
            <meta name="description" content="Generated by create next app" />
            </Head>
            <RecipeCreateForm onSubmit={(r) => mutate(r)}/>
            {isError && 
                <Alert
                    variant="warning"
                    label="There was an error creating the recipe"
                />
            }
            {isSuccess && 
                <Alert
                    variant="success"
                    label="Thanks for sharing your recipe!"
                />
            }
            
        </div>
    )
}