import * as joi from "joi";
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
});
