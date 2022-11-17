import type { NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import Recipe from "../../../models/Recipe";

export default async function handler(req, res: NextApiResponse){
    try{

        var conexion = await dbConnect();

        const recipes = await Recipe.find({}).count();


        //Insertar Recetas!!!!

        const result = await Recipe.find();


        res.status(201).json({success: true, result: result})

    }catch (e){
        res.status(400).json({success: false, error: e})
    }
}