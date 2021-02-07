import {mongoosePagination} from "ts-mongoose-pagination";
import { IUser } from '../interfaces/user/IUser';
import mongoose, { Schema } from "mongoose";

const User = new mongoose.Schema(
    {
        name: {
            type: String,
            index: true,
        },
        email: {
            type: String,
            lowercase: true,
            unique: true,
            index: true,
        },
        group: [{
            _id: false,
            id: {
                type: Schema.Types.ObjectId,
                ref: 'Group'
            },
            joined: Schema.Types.Date
        }],
        password: String,
        salt: String
    },
    { timestamps: true }
);

User.plugin(mongoosePagination);
export default mongoose.model<IUser & mongoose.Document>('User', User);
