import {Schema} from "mongoose";
import * as mongoose from "mongoose";
import { mongoosePagination } from "ts-mongoose-pagination";
import {IProductCategory} from "../../interfaces/product/IProductCategory";

const ProductCategory = new mongoose.Schema(
    {
        name: {
            type: String,
            index: true
        },
        description: {
            type: String,
            default: ""
        },
        parent: {
            type: Schema.Types.ObjectId,
            ref: 'ProductCategory'
        }
    },
    { timestamps: true }
);

ProductCategory.plugin(mongoosePagination);
export default mongoose.model<IProductCategory & mongoose.Document>('ProductCategory', ProductCategory);
