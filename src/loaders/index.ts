import expressLoader from './express';
import dependencyInjectorLoader from './dependencyInjector';
import mongooseLoader from './mongoose';
import jobsLoader from './jobs';
import Logger from './logger';

function model(name: string, route: string) : { name: string; model: any } {
    return {
        name,
        model: require(route).default
    };
}

export default async ({ expressApp }) => {
    const mongoConnection = await mongooseLoader();
    Logger.info('MongoDB successfully connected');

    const { agenda } = await dependencyInjectorLoader({
        mongoConnection,
        models: [

            model('attributeModel', '../models/attribute/attribute'),
            model('attributeCategoryModel', '../models/attribute/attributeCategory'),

            model('productModel', '../models/product/product'),
            model('productCategoryModel', '../models/product/productCategory'),

            model('imageModel', '../models/image'),
            model('userModel', '../models/user'),
            model('groupModel', '../models/group')
        ],
    });

    Logger.info('Dependency injector loaded');

    await jobsLoader({ agenda });
    Logger.info('Jobs loaded');

    await expressLoader({ app: expressApp });
    Logger.info('Express loaded');
};