import type { NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import Recipe from "../../../models/Recipe";

export default async function handler(req, res) {

    const { method } = req;

    var conexion = await dbConnect();

    switch(method){
        case 'POST':
            try {
                const recipe = await Recipe.create(req.body)

                var message = 'Recipe Succesfully Registered'

                res.status(201).json({success: true, result: recipe, message:message})

            } catch (error) {
                res.status(400).json({success: false, error: error, message: 'Ops! Something went wrong'})
            }

        break;
        default:

            res.status(400).json({success: false, message: 'Ops! Something went wrong'})
        break;
    }
    
}