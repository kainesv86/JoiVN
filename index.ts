import * as joi from "joi";

export const joiVn: joi.Root = joi.extend((joi) => {
        return {
                type: "string",
                base: joi.string(),
                messages: {
                        "string.max": "{{#label}} phải nhỏ hơn hoặc bằng {#limit} ký tự",
                        "string.min": "{{#label}} phải lớn hơn hoặc bằng {#limit} ký tự",
                        "string.require": "{{#label}} không được bỏ trống",
                },
        };
});
