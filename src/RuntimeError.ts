// class definition
export class RuntimeError extends Error {

    public constructor(message: string) {

        // call base constructor
        super(message);

        // link prototype chain
        Object.setPrototypeOf(this, new.target.prototype);

        // bind properties
        const object = this as any;
        this.name = object.constructor.name;
    }
}
