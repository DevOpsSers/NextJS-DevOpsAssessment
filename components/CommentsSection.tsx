import { useState } from "react";
import { useMutation } from "react-query"
import axios from "axios";
import Alert from "./Alert";
import Image from "next/image";
import useSession from "../pages/hooks/useNextAuth"

export default function CommentsSection({recipe, comments}) {

    const {isLoading, isSuccess, isError, mutate} = useMutation(
        (recipe : Object) => {
            return axios.post("/api/recipes/comment", recipe, {
                withCredentials: true});
        }
    )

    const [commentContent, setCommentContent] = useState("");
    const [commentError, setCommentError] = useState(false);

    function publishComment(object){
        if(object.text.length < 10){
            setCommentError(true)
        }else{
            setCommentError(false)
            mutate(object)
        }
           
    }
    
    const {data: session} = useSession()


    return(
        <div className='p-5 m-5 bg-white w-1/3 rounded-lg'>
            <h1 className="font-bold m-8">Comments Section</h1>
            {session && (<>
                <div>      
                    <textarea 
                        className='rounded-lg w-full' 
                        data-test="steps-content-input"
                        placeholder="Write a comment"
                        rows={5}
                        onChange={(e) => setCommentContent(e.target.value)}
                    ></textarea>
                    <h3 className="font-bold text-red-600">
                        {commentError && (
                            <span data-test="name-error">Too short! At least 10 characters</span>
                        )}
                    </h3>
                    <button 
                        onClick={() => 
                        publishComment({
                            recipe_id: recipe._id,
                            text: commentContent
                        })}  
                        className="m-auto flex rounded-2xl bg-rose-400 w-full">
                        <div className="mb-1 mt-1 m-auto text-white font-bold">Share </div>
                    </button>

                    {isError && 
                        <Alert
                            variant="warning"
                            label="There was an error publishing your comment"
                        />
                    }
                    {isSuccess && 
                        <Alert
                            variant="success"
                            label="Thanks for sharing your comment!"
                        />
                    }
                </div>
            </>)}
            {!session && (<>
                <h1 className="m-5 p-5 font-bold">Log In To Comment!</h1>
            </>)}
            {comments.length >= 1 && (<>
                <div className="m-5 p-5 border-2 border-black rounded-2xl	">
                    {comments.map((comment, i) => {           
                    return (
                        <div key={i} className="">
                            <div className="flex mt-10">
                                <div className=""><img src={comment.user_id.image} className="w-12 rounded-3xl"/></div>
                                {/* <div className=""><Image alt="{comment.user_id.name} + icon" src={comment.user_id.image} width={10} height={10}/></div> */}
                                <div className="m-3 font-semibold">{comment.user_id.name}</div>
                            </div>
                            <div className="p-5">{comment.text}</div>
                            {i+1 != comments.length && (<>    
                                <hr className="mt-5"/>
                            </>)}
                        </div>
                        
                    )
                    })}
                </div> 
            </>)}      
        </div>
        
    )
}
