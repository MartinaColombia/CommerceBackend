import {IModel} from "../IModel";

export interface IAttributeCategory extends IModel {
    name: string;
    type: AttributeType;
}

export enum AttributeType {
    Color = 'Color'
}
