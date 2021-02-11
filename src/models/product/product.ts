import {Schema} from "mongoose";
import * as mongoose from "mongoose";
import { mongoosePagination } from "ts-mongoose-pagination";
import {IProduct} from "../../interfaces/product/IProduct";

const Product = new mongoose.Schema(
    {
        name: {
            type: String,
            index: true
        },
        price: {
            type: Number,
            default: 0
        },
        category: [
            {
                type: Schema.Types.ObjectId,
                ref: 'ProductCategory'
            }
        ],
        images: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Image'
            }
        ],
        description: {
            type: String,
            default: ""
        },
        variations: {
            name: String,
            attribute: {
                type: Schema.Types.ObjectId,
                ref: 'Attribute'
            },
            price: String
        }
    },
    { timestamps: true }
);

Product.plugin(mongoosePagination);
export default mongoose.model<IProduct & mongoose.Document>('Product', Product);
