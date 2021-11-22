import * as joi from "joi";
import { joiVn } from "../index";

describe("JoiVn", () => {
        const schema = (input: any) =>
                joi
                        .object({
                                data: joiVn.string().max(5).min(2).required().empty(),
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
});
