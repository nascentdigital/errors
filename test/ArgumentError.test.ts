// imports
import "jest";
import {
    ArgumentError,
    RuntimeError
} from "../src";


// test suite
describe("ArgumentError", () => {

    test("should be throwable", () => {
        expect(() => {
            throw new ArgumentError("param");
        }).toThrow(ArgumentError);
    });

    test("should be a RuntimeError", () => {
        expect(() => {
            throw new ArgumentError("param");
        }).toThrow(RuntimeError);
    });

    describe("with default message", () => {

        // test data
        const parameter = "arg0";
        const error = new ArgumentError(parameter);

        test("should capture parameter", () => {

            // throw error
            try {
                throw error;
            }

                // validate caught exception
            catch (e: any) {
                expect(e).toBe(error);
                expect(e).toBeInstanceOf(ArgumentError);
                expect(e.name).toBe("ArgumentError");
                expect(e.parameter).toBe(parameter);
            }
        });

        test("should have default message", () => {

            // throw error
            try {
                throw error;
            }

            // validate caught exception
            catch (e: any) {
                expect(e).toBe(error);
                expect(typeof e.message).toBe("string");
                expect(e.message.length).toBeGreaterThan(0);
                expect(e.message).toContain(parameter);
            }
        });
    });


    describe("with explicit message", () => {

        // test data
        const parameter = "arg1";
        const message = "message1";
        const error = new ArgumentError(parameter, message);

        test("should capture parameter", () => {

            // throw error
            try {
                throw error;
            }

            // validate caught exception
            catch (e: any) {
                expect(e).toBe(error);
                expect(e).toBeInstanceOf(ArgumentError);
                expect(e.name).toBe("ArgumentError");
                expect(e.parameter).toBe(parameter);
            }
        });

        test("should capture message", () => {

            // throw error
            try {
                throw error;
            }

            // validate caught exception
            catch (e: any) {
                expect(e).toBe(error);
                expect(typeof e.message).toBe("string");
                expect(e.message).toBe(message);
            }
        });
    });
});
