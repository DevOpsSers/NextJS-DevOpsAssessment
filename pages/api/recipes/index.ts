import type { NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import Category from "../../../models/Category";
import Ingredient from "../../../models/Ingredient";
import Recipe from "../../../models/Recipe";

export default async function handler(req, res) {

    const { method } = req;

    await dbConnect();

    switch(method){
        case "POST":
            try {
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

                
                console.log(Category)
               
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