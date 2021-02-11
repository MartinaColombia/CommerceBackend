import {IPaginateResult} from "mongoose";
import {Inject, Service} from "typedi";
import {Logger} from "winston";
import {IModel} from "../interfaces/IModel";

@Service()
export default class ModelService<T extends IModel> {

    constructor(
        @Inject('logger') private logger : Logger
    ) {}

    /**
     * Register a model in the database
     * @param createRequest to use
     * @param model to query
     */
    public async create(createRequest: T, model: string): Promise<T> {
        try {
            return null;
        } catch (e) {
            this.logger.error(e);
            throw e;
        }
    }

    /**
     * Retrieves a model from the database
     * @param id of the model to retrieve
     * @param model to query
     */
    public async get(id: string, model: string): Promise<T> {
        try {
            return null;
        } catch (e) {
            this.logger.error(e);
            throw e;
        }
    }

    /**
     * Retrieves a filtered query of a model at the database
     * @param query to find
     * @param options for the query
     * @param model to query
     */
    public async query(query: any, options: any, model: string): Promise<IPaginateResult<T>> {
        try {
            return null;
        } catch (e) {
            this.logger.error(e);
            throw e;
        }
    }

    /**
     * Update a model from the database
     * @param updateRequest to use
     * @param model to query
     */
    public async update(updateRequest: T, model: string): Promise<T> {
        try {
            return null;
        } catch (e) {
            this.logger.error(e);
            throw e;
        }
    }

    /**
     * Delete a model from the database
     * @param id to use
     * @param model to query
     */
    public async delete(id: string, model: string): Promise<T> {
        try {
            return null;
        } catch (e) {
            this.logger.error(e);
            throw e;
        }
    }

}