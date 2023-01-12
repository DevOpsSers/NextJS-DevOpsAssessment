import {HeartIcon} from "@heroicons/react/24/outline"
import {ArrowLongRightIcon} from "@heroicons/react/24/outline"
import Link from "next/link"
import { useState } from "react";
import { useMutation } from "react-query"
import axios from "axios";
import useSession from "../pages/hooks/useNextAuth"
import useCloudinary from "../hooks/useCloudinary";
import { AdvancedImage } from "@cloudinary/react"

export default function RecipeShow({recipe}) {
    
    //To display images!
    const {Cloudinary} = useCloudinary()

    //So just registered users can like recipes!
    const {data: session} = useSession()

    const {isLoading, isSuccess, isError, mutate} = useMutation(
        (recipe : Object) => {
            return axios.post("/api/recipes/like", recipe, {
                withCredentials: true});
        }
    )

    const [likes, setLikes] = useState(recipe.likes);
    const [already_liked, setAlreadyLiked] = useState(recipe.already_liked);
    const [tried_to_like_unregistered, setTriedToLike] = useState(false);

    function Like(object){
        if(session){
            if(already_liked){
                setLikes(likes-1)
                setAlreadyLiked(null)
            }else{
                setLikes(likes+1)
                setAlreadyLiked('some value')
            }
            
            mutate(object)
        }else{
            setTriedToLike(true)
        }
    }
   

    return(
        <div className="rounded-2xl bg-white w-full p-5 m-3">
            <div className="flex">  
                <div>
                    <h1 className="font-bold p-1 m-2" data-test="recipe-name">{recipe.name}</h1>
                    <h2 className="font-light p-1 m-2" data-test="recipe-author">By: {recipe.author.name}</h2>
                </div>
                <div 
                    onClick={() => Like({recipe_id: recipe._id})}
                    className="bg-rose-400 rounded-2xl flex p-4 h-14 text-white font-bold ml-52">{likes}<HeartIcon  className="w-7 h-7 bg-white-400" data-test="like-item"/>
                
                </div> 
                {already_liked &&(<div className="ml-4 m-2 font-bold"data-test="like-text-item" >Already in your favourites!</div>)}
                {tried_to_like_unregistered &&(<div className="ml-4 m-2 font-bold" data-test="like-text-item">You must login to drop a like!</div>)}
            </div>
            {recipe.photo && (<>
                <AdvancedImage className='rounded-3xl w-2/3 ml-2 mt-4 mb-4' cldImg={Cloudinary.image(recipe.photo)}/>
            </>)}
            <div className="flex">
                {recipe.categories && recipe.categories.map((category, i) => {           
                    return (
                        <div key={i}>
                           <div className="rounded-2xl bg-stone-200 p-1 m-2">{category.name}</div>
                        </div>
                    ) 
                })}
            </div>
            <div className="flex m-5">
                
                <div className="m-5" data-test="recipe-details">
                    <div>Dificulty: {recipe.dificulty}</div>
                    <div>Time: {recipe.time_hours} h {recipe.time_minutes} min</div>
                    <div>People: {recipe.number_people}</div>
                    <div>Steps: 7</div>
                </div>
                
                <div className="m-5" data-test="recipe-ingredients">
                    <div>Ingredients:</div>
                    <ul>
                        {recipe.ingredients && recipe.ingredients.map((ingredient, i) => {           
                            return (
                                <div key={i}>
                                    <li  className="rounded-2xl bg-sky-200 p-1 m-2">{ingredient.amount} {ingredient.unit} {ingredient.ingredient}</li>
                                </div>
                            ) 
                        })}
                    </ul>
                </div>
                {/* <Image width={100} height={100} alt="food-image" src={"https://static2.abc.es/media/bienestar/2020/05/22/tortilla-patatas-k9tF--1200x630@abc.jpeg"}></Image> */}
            </div>
            <Link href={`recipes/${recipe._id}`}>
                <button className="flex bg-rose-400 rounded-2xl text-white font-bold w-2/5">
                    <div className="mt-1.5 ml-5">Have a look </div><ArrowLongRightIcon className="w-10 ml-5"/>
                </button>
            </Link>
        </div>
    )
}
