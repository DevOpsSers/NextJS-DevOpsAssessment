import {model, Model, models, Schema, Types} from "mongoose";
import User from "./User"


export interface RecipeInterface {
    _id:string;
    author: string;
    name:string;
    dificulty:string;
    time_hours: string;
    time_minutes: string;
    number_people: string;
    
}

const recipeSchema = new Schema<RecipeInterface, Model<RecipeInterface>>({
    author: {ref: User ,type: String},
    name: {type: String},
    dificulty: {type: String, required: true},
    time_hours: {type: String},
    time_minutes: {type: String},
    number_people: {type: String},
    
})
export default (models.Recipe as Model<RecipeInterface>) || model<RecipeInterface>("Recipe", recipeSchema)

//https://wanago.io/2018/12/31/mongodb-relationships-documents-typescript-express-tutorial-5/