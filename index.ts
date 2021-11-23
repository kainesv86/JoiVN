// ======================= String  =======================
const StringVnLang = {
        "string.alphanum": "{{#label}} chỉ chứ các ký tự là chữ số",
        "string.base": "{{#label}} phải là biến string",
        "string.base64": "{{#label}} phải hợp lệ với base64 string",
        "string.creditCard": "{{#label}} phải là số thẻ tín dụng",
        "string.dataUri": "{{#label}} phải là đường dẫn dataUri string hợp lệ",
        "string.domain": "{{#label}} phải chứ một tên domain hợp lệ",
        "string.email": "{{#label}} phải là một email hợp lệ",
        "string.empty": "{{#label}} không được phép bỏ trống",
        "string.guid": "{{#label}} must be a valid GUID",
        "string.hex": "{{#label}} chỉ được chứa các ký tự thập lục phân",
        "string.hexAlign": "{{#label}} hex decoded representation must be byte aligned",
        "string.hostname": "{{#label}} phải là tên máy chủ phù hợp",
        "string.ip": "{{#label}} must be a valid ip address with a {{#cidr}} CIDR",
        "string.ipVersion": "{{#label}} must be a valid ip address of one of the following versions {{#version}} with a {{#cidr}} CIDR",
        "string.isoDate": "{{#label}} phải ở định dạng iso",
        "string.isoDuration": "{{#label}} phải là iso ISO 8601 duration hợp lệ",
        "string.length": "{{#label}} phải dài {{#limit}} ký tự",
        "string.lowercase": "{{#label}} chỉ chứ các ký tự in thường",
        "string.max": "{{#label}} phải nhỏ hơn hoặc bằng {{#limit}} ký tự",
        "string.min": "{{#label}} phải lớn hơn hoặc bằng {{#limit}} ký tự",
        "string.normalize": "{{#label}} phải đư {ợc chuẩn hoá unicode ở dạng {#form}} form",
        "string.token": "{{#label}} phải chứa các ký tự chỗ số và dấu gạch dưới",
        "string.pattern.base": "{{#label}} với giá trị là {:[.]} không khớp với pattern bắt buộc: {{#regex}}",
        "string.pattern.name": "{{#label}} với giá trị là {:[.]} không khớp với {{#name}} pattern",
        "string.pattern.invert.base": "{{#label}} với giá trị là {:[.]} phải phù với pattern: {{#regex}}",
        "string.pattern.invert.name": "{{#label}} với giá trị là {:[.]} phải khớp với dạng đảo ngược {{#name}} pattern",
        "string.trim": "{{#label}} không được có khoảng trắng ở đầu hoặc cuối",
        "string.uri": "{{#label}} phải là uri phù hợp",
        "string.uriCustomScheme": "{{#label}} phải là một uri phù với scheme khớp với {{#scheme}} pattern",
        "string.uriRelativeOnly": "{{#label}} phải là relative uri hợp lệ",
        "string.uppercase": "{{#label}} chỉ chứ các ký tự in hoa",
};

const NumberVnLang = {
        "number.base": "{{#label}} phải là một con số",
        "number.greater": "{{#label}} phải lớn hơn {{#limit}}",
        "number.infinity": "{{#label}} không thể là vô cực",
        "number.integer": "{{#label}} phải là số nguyên",
        "number.less": "{{#label}} phải nhỏ hơn {{#limit}}",
        "number.max": "{{#label}} phải nhỏ hơn hoặc bằng {{#limit}}",
        "number.min": "{{#label}} phải lớn hơn hoặc bằng {{#limit}}",
        "number.multiple": "{{#label}} phải là bội số của {{#multiple}}",
        "number.negative": "{{#label}} phải là số âm",
        "number.port": "{{#label}} phải là port hợp lệ",
        "number.positive": "{{#label}} phải là số dương",
        "number.precision": "{{#label}} không được nhiều {{#limit}} chữ số thập phân",
        "number.unsafe": "{{#label}} phải là safe number of Javascript",
};

// ======================= Any =======================

const AnyVnLang = {
        "any.custom": "{{#label}} xác thực tuỳ chỉnh không thành công vì {{#error.message}}",
        "any.default": "{{#label}} đã xảy ra lỗi khi chạy default method",
        "any.failover": "{{#label}} đã xảy ra lỗi khi chạy failover method",
        "any.invalid": "{{#label}} chứa giá trị không hợp lệ",
        "any.only": '{{#label}} phải {if(#valids.length == 1, "", "one of ")}{{#valids}}',
        "any.ref": "{{#label}} {{#arg}} references {{:#ref}} which {{#reason}}",
        "any.required": "{{#label}} là bắt buộc",
        "any.unknown": "{{#label}} không được phép",
};

const AlternativesVnLang = {
        "alternatives.all": "{{#label}} không khớp với tất cả các kiểu bắt buộc",
        "alternatives.any": "{{#label}} không khớp với bất kỳ kiểu cho phép",
        "alternatives.match": "{{#label}} không khớp với bất kỳ kiểu cho phép",
        "alternatives.one": "{{#label}} khớp nhiều hơn một loại cho phép",
        "alternatives.types": "{{#label}} phải là một trong {{#types}}",
};

const ArrayVnLang = {
        "array.base": "{{#label}} phải là một array",
        "array.excludes": "{{#label}} chứa một giá trị bị loại trừ",
        "array.hasKnown": "{{#label}} không chứa ít nhất một kết quả bắt buộc phù cho loại {:#patternLabel}",
        "array.hasUnknown": "{{#label}} không chứa ít nhất một kết phù hợp bắt buộc",
        "array.includes": "{{#label}} không khớp với bất kỳ loại cho phép",
        "array.includesRequiredBoth": "{{#label}} không bao gồm {{#knownMisses}} và {{#unknownMisses}} other required value(s)",
        "array.includesRequiredKnowns": "{{#label}} does not contain {{#knownMisses}}",
        "array.includesRequiredUnknowns": "{{#label}} does not contain {{#unknownMisses}} (các) giá trị bắt buộc khác",
        "array.length": "{{#label}} phải chứa {{#limit}} phần tử",
        "array.max": "{{#label}} phải chứ ít hơn hoặc bằng {{#limit}} phần tử",
        "array.min": "{{#label}} phải chứa ít nhất {{#limit}} phần tử",
        "array.orderedLength": "{{#label}} phải chứa tối đa {{#limit}} phần tử",
        "array.sort": "{{#label}} phải sắp xếp theo thứ tự {#order} dựa trên {{#by}}",
        "array.sort.mismatching": "{{#label}} không thể sắp xếp do các loại không khớp",
        "array.sort.unsupported": "Không thể sắp xếp {{#label}} do loại {#type} không được hỗ trợ",
        "array.sparse": "{{#label}} không được là một array thưa thớt",
        "array.unique": "{{#label}} chứa giá trị trùng lặp",
};

export { StringVnLang, NumberVnLang, AnyVnLang, AlternativesVnLang, ArrayVnLang };
