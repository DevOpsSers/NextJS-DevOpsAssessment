import type { NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import Recipe from "../../../models/Recipe";

export default async function handler(req, res) {

    const {query:{id}, method } = req;

    var conexion = await dbConnect();

    switch(method){
        case 'PUT':
            try {
                const recipe = await Recipe.findByIdAndUpdate(id, req.body)

                if(!recipe){
                    res.status(400).json({success: false})
                }
                
                var message = 'Repice Succesfully Updated'
                res.status(201).json({success: true, result: recipe, message:message})

            } catch (error) {
                res.status(400).json({success: false, error: error, message: 'Ops! Something went wrong'})
            }
            
        break;
        case 'DELETE':
            try {
                const recipe = await Recipe.findByIdAndDelete(id)

                if(!recipe){
                    res.status(400).json({success: false})
                }
                
                var message = 'Repice Succesfully Deleted'
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