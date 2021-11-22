import * as joi from "joi";
import { StringVnLang } from "../index";

describe("JoiVn", () => {
        const schema = (input: any) =>
                joi
                        .object({
                                data: joi.string().min(2).max(5).empty().messages(StringVnLang),
                        })
                        .validate(input);

        describe("String VN lang", () => {
                it("Pass maximum length", () => {
                        const { error } = schema({ data: "12341564" });
                        console.log(error?.details[0].message);
                        expect(error).toBeDefined();
                });
                it("Pass minimum length", () => {
                        const { error } = schema({ data: "1" });
                        console.log(error?.details[0].message);
                        expect(error).toBeDefined();
                });
                it("Pass empty", () => {
                        const { error } = schema({ data: "" });
                        console.log(error?.details[0].message);
                        expect(error).toBeDefined();
                });
        });

        describe("Any VN lang", () => {
                it("Pass required", () => {
                        const anySchema = joi.object({ data: joi.any().required() });
                        const { error } = anySchema.validate({});
                        console.log(error?.details[0].message);
                        expect(error).toBeDefined();
                });
        });
});
