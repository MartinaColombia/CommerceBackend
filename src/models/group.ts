import { IGroup } from "../interfaces/user/IGroup";
import * as mongoose from "mongoose";
import { Schema } from "mongoose";
import { mongoosePagination } from "ts-mongoose-pagination";

const CRUDOperations = {
    create: {
        type: Boolean,
        default: false
    },
    read: {
        type: Boolean,
        default: false
    },
    update: {
        type: Boolean,
        default: false
    },
    delete: {
        type: Boolean,
        default: false
    }
};

const Group = new mongoose.Schema(
    {
        name: {
            type: String,
            index: true
        },
        admin: {
            type: Boolean,
            default: false
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            unique: false
        },
        permissions: {
            _id: false,
            user: CRUDOperations,
            group: {
                ...CRUDOperations,
                assign: {
                    type: Boolean,
                    default: false
                }
            }
        }
    },
    { timestamps: true }
);

Group.plugin(mongoosePagination);
export default mongoose.model<IGroup & mongoose.Document>('Group', Group);
