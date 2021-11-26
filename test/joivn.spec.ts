import * as joi from "joi";
import { boolean, object, string } from "joi";
import {
        StringVnLang,
        AlternativesVnLang,
        AnyVnLang,
        ArrayVnLang,
        BinaryVnLang,
        BooleanVnLang,
        DataVnLang,
        FunctionVnLang,
        KeysVnLang,
        NumberVnLang,
        ObjectVnLang,
        SymbolVnLang,
} from "../index";

describe("JoiVn", () => {
        describe("String VN lang", () => {
                const schema = joi.string().messages(StringVnLang);
                it("Pass string.base", () => {
                        const test = schema;
                        const { error } = test.validate(1223);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass empty", () => {
                        const test = schema;
                        const { error } = test.validate("");
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass alphanum", () => {
                        let test = schema;
                        test = test.alphanum();
                        const { error } = test.validate("@!@#!#@@%%(#@*&$(*)#@($#$)asd551");
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass base64", () => {
                        let test = schema;
                        test = test.base64();
                        const { error } = test.validate("VE9PTUFOWVNFQ1JFVFM");
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass base64 paddingRequired: true", () => {
                        let test = schema;
                        test = test.base64({ paddingRequired: true });
                        const { error } = test.validate("VE9PTUFOWVNFQ1JFVFM");
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass base64 paddingRequired: false", () => {
                        let test = schema;
                        test = test.base64({ paddingRequired: false });
                        const { error } = test.validate("VE9PTUFOWVNFQ1JFVFM=");
                        expect(error).toBeUndefined();
                });

                it("Pass credit Card", () => {
                        let test = schema;
                        test = test.creditCard();
                        const { error } = test.validate("7992739871");
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass dataUri valid", () => {
                        let test = schema;
                        test = test.dataUri();
                        const { error } = test.validate("VE9PTUFOWVNFQ1JFVFM=");
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass dataUri invalid", () => {
                        let test = schema;
                        test = test.dataUri();
                        const { error } = test.validate("data:image/png;base64,VE9PTUFOWVNFQ1JFVFM=");
                        expect(error).toBeUndefined();
                });

                it("Pass domain", () => {
                        let test = schema;
                        test = test.domain();
                        const { error } = test.validate("google");
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass email", () => {
                        let test = schema;
                        test = test.email();
                        const { error } = test.validate("admin@kaine");
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass GUID valid", () => {
                        let test = schema;
                        test = test.guid();
                        const { error } = test.validate("eccaddfe-fe2d-4893-92dc-150095686250");
                        expect(error).toBeUndefined();
                });

                it("Pass GUID invalid", () => {
                        let test = schema;
                        test = test.guid();
                        const { error } = test.validate("eccaddfe-fe2d-4893-92dc-150sad686250");
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass hex", () => {
                        let test = schema;
                        test = test.hex();
                        const { error } = test.validate("09b2a86cz");
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass ip", () => {
                        let test = schema;
                        test = test.ip();
                        const { error } = test.validate("192.158.1.257");
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass ip version", () => {
                        let test = schema;
                        test = test.ip({ version: ["ipv6"] });
                        const { error } = test.validate("192.158.1.257");
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass iso date", () => {
                        let test = schema;
                        test = test.isoDate();
                        const { error } = test.validate("1990-13-13");
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass iso duration", () => {
                        let test = schema;
                        test = test.isoDuration();
                        const { error } = test.validate("P3Y1Y");
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass length", () => {
                        let test = schema;
                        test = test.length(5);
                        const { error } = test.validate("12 345");
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass lowercase", () => {
                        let test = schema;
                        test = test.lowercase();
                        const { value } = test.validate("JOI-Vn-lang");
                        console.log("To lower case: " + value);
                        expect(value).toBe("joi-vn-lang");
                });

                it("Pass uppercase", () => {
                        let test = schema;
                        test = test.uppercase();
                        const { value } = test.validate("JOI-Vn-lang");
                        console.log("To upper case: " + value);
                        expect(value).toBe("JOI-VN-LANG");
                });

                it("Pass max length", () => {
                        let test = schema;
                        test = test.max(5);
                        const { error } = test.validate("a2b3c4");
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass min length", () => {
                        let test = schema;
                        test = test.min(5);
                        const { error } = test.validate("a2b3");
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass token", () => {
                        let test = schema;
                        test = test.token();
                        const { error } = test.validate("a56sd65asd4554--zx5c64.das5das564d56s564ad654a56d.xc1z1x5");
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass token", () => {
                        let test = schema;
                        test = test.token();
                        const { error } = test.validate("a56sd65asd4554--zx5c64.das5das564d56s564ad654a56d.xc1z1x5");
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass pattern", () => {
                        let test = schema;
                        test = test.pattern(/^[0-9]+$/, "numbers");
                        const { error } = test.validate("alpha");
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass pattern invert", () => {
                        let test = schema;
                        test = test.pattern(/^[a-z]+$/, { invert: true });
                        const { error } = test.validate("lowercase");
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass trim", () => {
                        let test = schema;
                        test = test.trim();
                        const { value } = test.validate("   Lunar Tear  ");
                        console.log("After trim: " + value);
                        expect(value).toBe("Lunar Tear");
                });
        });
        describe("Number VN lang", () => {
                const schema = joi.number().messages(NumberVnLang);
                it("Pass base", () => {
                        let test = schema;
                        const { error } = test.validate("122aa3");
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass max", () => {
                        let test = schema;
                        test = test.max(50);
                        const { error } = test.validate(555);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass min", () => {
                        let test = schema;
                        test = test.min(50);
                        const { error } = test.validate(45);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass infinity", () => {
                        let test = schema;
                        const { error } = test.validate(1 / 0);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass integer", () => {
                        let test = schema;
                        test = test.integer();
                        const { error } = test.validate(45.231);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass less", () => {
                        let test = schema;
                        test = test.less(50);
                        const { error } = test.validate(50);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass greater", () => {
                        let test = schema;
                        test = test.greater(50);
                        const { error } = test.validate(50);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass multiple", () => {
                        let test = schema;
                        test = test.multiple(3);
                        const { error } = test.validate(50);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass negative", () => {
                        let test = schema;
                        test = test.negative();
                        const { error } = test.validate(50);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass positive", () => {
                        let test = schema;
                        test = test.positive();
                        const { error } = test.validate(-50);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass port", () => {
                        let test = schema;
                        test = test.port();
                        const { error } = test.validate(65536);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass precision", () => {
                        let test = schema;
                        test = test.precision(2);
                        const { error } = test.validate(123);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass unsafe", () => {
                        let test = schema;
                        test = test.unsafe();
                        const { error } = test.validate(9007199254740995);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });
        });
        describe("Any VN lang", () => {
                const schema = joi.any().messages(AnyVnLang);

                it("Pass custom", () => {
                        let test = schema;
                        const method = (value, helpers) => {
                                // Throw an error (will be replaced with 'any.custom' error)
                                if (value === "1") {
                                        throw new Error("không được là 1");
                                }

                                // Replace value with a new value
                                if (value === "2") {
                                        return "3";
                                }

                                // Use error to return an existing error code
                                if (value === "4") {
                                        return helpers.error("any.invalid");
                                }

                                // Override value with undefined to unset
                                if (value === "5") {
                                        return undefined;
                                }
                        };
                        test = test.custom(method, "custom validation");
                        const { error, value } = test.validate("1");
                        console.log(value);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass default", () => {
                        const method = (parent, helpers) => {
                                throw new Error(parent.fName + " - " + parent.lName);
                        };
                        const test = joi.object({
                                fName: joi.string(),
                                lName: joi.string(),
                                fullname: joi.any().default(method).messages(AnyVnLang),
                        });
                        const { error, value } = test.validate({ fname: "Kainé", lName: "Phạm" });

                        console.log(value);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                // it("Pass failover", () => {
                //         const method = (parent, helpers) => {
                //                 throw new Error(parent.fName + " - " + parent.lName);
                //         };
                //         const test = joi.object({
                //                 fName: joi.string(),
                //                 lName: joi.string(),
                //                 fullname: joi.any().default(method).messages(AnyVnLang),
                //         });
                //         const { error, value } = test.validate({ fname: "Kainé", lName: "Phạm" });

                //         console.log(value);
                //         console.log(error.details[0].message);
                //         expect(error).toBeDefined();
                // });

                it("Pass invalid", () => {
                        let test = schema;
                        test = test.invalid("a", "A");
                        const { error } = test.validate("a");
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass only", () => {
                        let test = schema;
                        test = test.only().valid(1, 2, 3);
                        const { error } = test.validate(4);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass only", () => {
                        let test = schema;
                        test = test.only().valid(1, 2, 3);
                        const { error } = test.validate(4);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass ref", () => {
                        let test = joi
                                .object({
                                        a: joi.string(),
                                        b: joi.any().valid(
                                                joi.ref("a", {
                                                        adjust: (value) => value * 2,
                                                })
                                        ),
                                })
                                .messages(AnyVnLang);
                        const { error } = test.validate({ a: "a", b: "2" });
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass required", () => {
                        let test = joi.object({
                                a: joi.any().required().messages(AnyVnLang),
                                b: joi.any(),
                        });

                        const { error } = test.validate({ b: "Hello" });
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });
        });

        describe("Alternatives VN Lang", () => {
                it("Pass conditional", () => {
                        const test = joi
                                .alternatives()
                                .conditional(joi.object({ b: 5 }).unknown(), {
                                        then: joi.object({
                                                a: joi.string(),
                                                b: joi.any(),
                                        }),
                                        otherwise: joi.object({
                                                a: joi.number(),
                                                b: joi.any(),
                                        }),
                                })
                                .messages(AlternativesVnLang);

                        const { error } = test.validate({ b: 6, a: "5asdas" });
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass any", () => {
                        const test = joi
                                .alternatives()
                                .try(
                                        joi.object({
                                                a: joi.string(),
                                        }),
                                        joi.object({
                                                b: joi.string(),
                                        }),
                                        joi.object({
                                                c: joi.string(),
                                        })
                                )
                                .match("one")
                                .messages(AlternativesVnLang);

                        const { error } = test.validate({ a: 1 });
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass full", () => {
                        const test = joi
                                .alternatives()
                                .try(
                                        joi.object({
                                                a: joi.string(),
                                        }),
                                        joi.object({
                                                b: joi.string(),
                                        }),
                                        joi.object({
                                                c: joi.string(),
                                        })
                                )
                                .match("all")
                                .messages(AlternativesVnLang);

                        const { error } = test.validate({ a: "x" });
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass try", () => {
                        const test = joi.alternatives().try(joi.number(), joi.string()).messages(AlternativesVnLang);

                        const { error } = test.validate(true);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });
        });

        describe("Array VN Lang", () => {
                const schema = joi.array().messages(ArrayVnLang);

                it("Pass base", () => {
                        const { error } = schema.validate("Hello");
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                // it("Pass has known", () => {
                //         let test = schema;
                //         test = test
                //                 .items(
                //                         joi.object({
                //                                 a: joi.string(),
                //                                 b: joi.number(),
                //                                 c: joi.number(),
                //                         })
                //                 )
                //                 .has(joi.object({ a: joi.string(), b: joi.number(), c: joi.boolean() }));
                //         const { error } = test.validate([{ a: "b", b: 1, c: 1 }]);
                //         console.log(error.details[0].message);
                //         expect(error).toBeDefined();
                // });

                it("Pass has Unknown", () => {
                        let test = schema;
                        test = test
                                .items(
                                        joi.object({
                                                a: joi.string(),
                                                b: joi.number(),
                                        })
                                )
                                .has(joi.object({ a: joi.string().valid("a"), b: joi.number() }));
                        const { error } = test.validate([{ a: "b", b: 1 }]);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass length", () => {
                        let test = schema;
                        test = test.length(5);
                        const { error } = test.validate([{}, {}, {}, {}, {}, {}]);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass max", () => {
                        let test = schema;
                        test = test.max(5);
                        const { error } = test.validate([{}, {}, {}, {}, {}, {}]);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass min", () => {
                        let test = schema;
                        test = test.min(5);
                        const { error } = test.validate([{}, {}, {}, {}]);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass orderedLength", () => {
                        let test = schema;
                        test = test.ordered(joi.string().required(), joi.number().required());
                        const { error } = test.validate(["a", 2, "b", 3, "a"]);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass includesRequiredUnknowns", () => {
                        let test = schema;
                        test = test.ordered(joi.string().required()).items(joi.number().required());
                        const { error } = test.validate(["a"]);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                // it("Pass sort mismatching", () => {
                //         let test = schema;
                //         test = test.sort();
                //         const { error } = test.validate([4, 5, 2, 76, 3, 7]);
                //         console.log(error.details[0].message);
                //         expect(error).toBeDefined();
                // });

                it("Pass sort mismatching", () => {
                        let test = schema;
                        test = test.sort();
                        const { error } = test.validate(["4", 5, 2, "76", 3, 7]);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass sparse", () => {
                        let test = schema;
                        test = test.sparse(false);
                        const { error } = test.validate([1, , 2, , 3]);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });

                it("Pass unique", () => {
                        let test = schema;
                        test = test.unique();
                        const { error } = test.validate([1, 2, 3, 1]);
                        console.log(error.details[0].message);
                        expect(error).toBeDefined();
                });
        });
});
