export class ZeroDivisionError extends Error implements Error{
    constructor(message?: string, cause?: unknown){
        super(message, {cause});
        this.name = "ZeroDivisionError";
    };
};