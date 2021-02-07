import {IAttribute} from "../attribute/IAttribute";
import {IModel} from "../IModel";
import {IProductCategory} from "./IProductCategory";

export interface IProduct extends IModel {
    name: string;
    category: IProductCategory | string;
    images: IProductImage[];
    description: string;
    variations: IProductVariation[];
}

export interface IProductImage {
    image: string | IProductCategory;
    order: number;
    variation: string | IAttribute;
}

export interface IProductVariation {
    name: string;
    attribute: string | IAttribute[];
    price: string;
}
