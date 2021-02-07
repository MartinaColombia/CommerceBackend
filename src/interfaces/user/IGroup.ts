import { IGroupPermissions } from "../permissions/IGroupPermissions";
import { IModel } from "../IModel";
import { IUser } from "./IUser";

export interface IGroup extends IModel {
    name: string;
    createdBy: IUser;
    admin: boolean;
    permissions: IPermissions;
}

export interface IPermissions {
    user: IBasePermissions;
    group: IGroupPermissions;
}

export interface IBasePermissions {
    create: boolean;
    read: boolean;
    update: boolean;
    delete: boolean;
}
