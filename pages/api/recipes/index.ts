import dbConnect from "../../../lib/dbConnect";
import Category from "../../../models/Category";
import Ingredient from "../../../models/Ingredient";
import Recipe from "../../../models/Recipe";
import { unstable_getServerSession } from "next-auth/next"
import {authOptions} from "../auth/[...nextauth]"
import User from "../../../models/User";

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
                const author = await User.findOne({ email: session.user.email}).exec();
                req.body.author=author._id
             
                const recipe = await Recipe.create(req.body)
                
                req.body.categories.forEach((category) => {
                    Category.create({
                        recipe_id : recipe._id,
                        name: category
                    })
                });

                req.body.ingredient_ingredients.forEach((ingredient, index) => {
                    Ingredient.create({
                        recipe_id : recipe._id,
                        amount: req.body.ingredient_amounts[index],
                        unit: req.body.ingredient_units[index],
                        ingredient: req.body.ingredient_ingredients[index]
                    })
                });
               
                const message = "Recipe Succesfully Registered"

                res.status(201).json({success: true, result: recipe, message:message})

            } catch (error) {
                res.status(400).json({success: false, error: error.toString(), message: error.toString()})
            }

        break;
        default:

            res.status(400).json({success: false, message: "Ops! Something went wrong"})
        break;
    }
    
}