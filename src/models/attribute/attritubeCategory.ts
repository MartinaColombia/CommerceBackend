import * as mongoose from "mongoose";
import { mongoosePagination } from "ts-mongoose-pagination";
import {IAttributeCategory} from "../../interfaces/attribute/IAttributeCategory";

const AttributeCategory = new mongoose.Schema(
    {
        name: {
            type: String,
            index: true
        },
        admin: {
            type: String,
            enum: ["Number"],
            default: "Color"
        }
    },
    { timestamps: true }
);

AttributeCategory.plugin(mongoosePagination);
export default mongoose.model<IAttributeCategory & mongoose.Document>('AttributeCategory', AttributeCategory);
