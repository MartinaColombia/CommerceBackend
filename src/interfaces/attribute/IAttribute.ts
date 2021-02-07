import {IModel} from "../IModel";
import {IAttributeCategory} from "./IAttributeCategory";

export interface IAttribute extends IModel {
    name: string;
    category: IAttributeCategory | string;
}
