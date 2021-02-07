import { Document, PaginateModel } from 'mongoose';
import {IAttribute} from "../../interfaces/attribute/IAttribute";
import {IAttributeCategory} from "../../interfaces/attribute/IAttributeCategory";
import { IUser } from '../../interfaces/user/IUser';
import { IGroup } from "../../interfaces/user/IGroup";
import {IProduct} from "../../interfaces/product/IProduct";
import {IProductCategory} from "../../interfaces/product/IProductCategory";

declare global {
    namespace Express {
        export interface Request {
            currentUser: IUser & Document;
        }
    }

    namespace Models {

        export type Attribute = PaginateModel<IAttribute & Document>;
        export type AttributeCategory = PaginateModel<IAttributeCategory & Document>;

        export type Product = PaginateModel<IProduct & Document>;
        export type ProductCategory = PaginateModel<IProductCategory & Document>;

        export type User = PaginateModel<IUser & Document>;
        export type Group = PaginateModel<IGroup & Document>;

    }

}
