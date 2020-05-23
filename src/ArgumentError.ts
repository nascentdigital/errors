// imports
import {RuntimeError} from "./RuntimeError";


// error definitions

export class ArgumentError extends RuntimeError {

    public readonly parameter: string;

    public constructor(parameter: string, message?: string) {

        // call base constructor
        super(message || `Invalid value for parameter "${parameter}"`);

        // initialize instance variables
        this.parameter = parameter;
    }
}
