import {model, Model, models, Schema, Types} from "mongoose";


export interface LikeInterface {
    _id:string;
    user_id: Schema.Types.ObjectId;
    recipe_id: Schema.Types.ObjectId;
       
}

const likeSchema = new Schema<LikeInterface, Model<LikeInterface>>({
    user_id: {ref: 'User' ,type: Schema.Types.ObjectId},
    recipe_id: {ref: 'Recipe' ,type: Schema.Types.ObjectId},
    
    
})
export default (models.Like as Model<LikeInterface>) || model<LikeInterface>("Like", likeSchema)

//https://wanago.io/2018/12/31/mongodb-relationships-documents-typescript-express-tutorial-5/