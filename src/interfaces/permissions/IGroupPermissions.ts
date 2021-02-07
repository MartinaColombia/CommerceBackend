import {IBasePermissions} from "../user/IGroup";

export interface IGroupPermissions extends IBasePermissions{
    assign: boolean;
}
