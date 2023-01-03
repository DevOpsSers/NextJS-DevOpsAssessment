import dbConnect from "../../../lib/dbConnect";
import { unstable_getServerSession } from "next-auth/next"
import {authOptions} from "../auth/[...nextauth]"
import User from "../../../models/User";
import Like from "../../../models/Like";

export default async function Handler(req, res) {
    const session = await unstable_getServerSession(req, res, authOptions)

     if(!session){
        return res.status(401).json({success: false, message:'unauthorized'})
     }
    const { method } = req;

    await dbConnect();

    switch(method){
        case "POST":
            try {
                const user = await User.findOne({ email: session.user.email }).exec();
                
                const existent_like = await Like.findOne({ user_id:user._id, recipe_id: req.body.recipe_id }).exec();

                if(existent_like){
                    await Like.findByIdAndDelete(existent_like._id)
                    const message = "Like Succesfully Removed"

                    res.status(201).json({success: true, message:message})
                }else{
                    req.body.user_id=user._id

                    const like = await Like.create(req.body)
                    const message = "Like Succesfully Created"

                    res.status(201).json({success: true, result: like, message:message})
                }
            } catch (error) {
                res.status(400).json({success: false, error: error.toString(), message: error.toString()})
            }

        break;
        default:

            res.status(400).json({success: false, message: "Ops! Something went wrong"})
        break;
    }
    
}