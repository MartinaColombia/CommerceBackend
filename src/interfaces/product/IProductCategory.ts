import {IModel} from "../IModel";

export interface IProductCategory extends IModel {
    name: string;
    description: string;
    parent: string | IProductCategory;
}
