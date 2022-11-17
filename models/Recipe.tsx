import {model, Model, models, Schema, Types} from "mongoose";
import User from "../models/User"


export interface RecipeInterface {
    _id:string;
    author: string;
    name:string;
    dificulty:string;
    time_hours: number;
    time_minutes: number;
    number_people: number;
    
}

const recipeSchema = new Schema<RecipeInterface, Model<RecipeInterface>>({
    author: {ref: User ,type: String, required: true},
    name: {type: String, required: true},
    dificulty: {type: String, required: true},
    time_hours: {type: Number, required: true},
    time_minutes: {type: Number, required: true},
    number_people: {type: Number, required: true},
    
})
export default (models.Recipe as Model<RecipeInterface>) || model<RecipeInterface>("Recipe", recipeSchema)

//https://wanago.io/2018/12/31/mongodb-relationships-documents-typescript-express-tutorial-5/