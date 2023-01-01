import {model, Model, models, Schema, Types} from "mongoose";


export interface CategoryInterface {
    _id: string;
    recipe_id: Schema.Types.ObjectId;
    name: string;
}

const categoryeSchema = new Schema<CategoryInterface, Model<CategoryInterface>>({
    recipe_id: {ref: 'Recipe' ,type: Schema.Types.ObjectId},
    name: {type: String},
    
    
})
export default (models.Category as Model<CategoryInterface>) || model<CategoryInterface>("Category", categoryeSchema)

//https://wanago.io/2018/12/31/mongodb-relationships-documents-typescript-express-tutorial-5/