// imports
import "jest";
import {
    RuntimeError
} from "../src";


// define subclass for testing
class CustomError extends RuntimeError {}


// test suite
describe("RuntimeError", () => {

    test("should be throwable", () => {
        expect(() => {
            throw new RuntimeError("message");
        }).toThrow(RuntimeError);
    });

    test("should be extensible", () => {
        expect(() => {
            throw new CustomError("message");
        }).toThrow(CustomError);
    });

    test("should reflect derived class properties", () => {

        // test data
        const clazz = CustomError;
        const clazzName = clazz.name;
        const message = "a custom message";

        // throw error
        try {
            throw new CustomError(message);
        }

        // validate caught exception
        catch (e) {
            expect(e).toBeInstanceOf(clazz);
            expect(e.name).toBe(clazzName);
            expect(e.message).toBe(message);
            expect(e.stack.startsWith(`${clazzName}:`)).toBe(true);
        }
    });
});
