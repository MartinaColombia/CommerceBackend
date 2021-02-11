import {IImage} from "../interfaces/IImage";
import * as mongoose from "mongoose";
import { mongoosePagination } from "ts-mongoose-pagination";

const Group = new mongoose.Schema(
    {
        image: String
    },
    { timestamps: true }
);

Group.plugin(mongoosePagination);
export default mongoose.model<IImage & mongoose.Document>('Image', Group);
