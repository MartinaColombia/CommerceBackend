import {Schema} from "mongoose";
import * as mongoose from "mongoose";
import { mongoosePagination } from "ts-mongoose-pagination";
import {IAttributeCategory} from "../../interfaces/attribute/IAttributeCategory";

const Attribute = new mongoose.Schema(
    {
        name: {
            type: String,
            index: true
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'AttributeCategory'
        }
    },
    { timestamps: true }
);

Attribute.plugin(mongoosePagination);
export default mongoose.model<IAttributeCategory & mongoose.Document>('Attribute', Attribute);
