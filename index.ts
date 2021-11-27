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
        "string.guid": "{{#label}} phải là một GUID hợp lệ",
        "string.hex": "{{#label}} chỉ được chứa các ký tự thập lục phân",
        "string.hexAlign": "{{#label}} trình bày hex giải mã phải là byte aligned",
        "string.hostname": "{{#label}} phải là tên máy chủ phù hợp",
        "string.ip": "{{#label}} phải là địa chỉ ip hợp lệ với {{#cidr}} CIDR",
        "string.ipVersion": "{{#label}} phải là địa chỉ ip hợp lệ của một trong các phiên bản sau {{#version}} với {{#cidr}} CIDR",
        "string.isoDate": "{{#label}} phải ở định dạng ISO date",
        "string.isoDuration": "{{#label}} phải là  ISO 8601 duration hợp lệ",
        "string.length": "{{#label}} phải dài {{#limit}} ký tự",
        "string.lowercase": "{{#label}} chỉ chứa các ký tự in thường",
        "string.uppercase": "{{#label}} chỉ chứa các ký tự in hoa",
        "string.max": "{{#label}} phải nhỏ hơn hoặc bằng {{#limit}} ký tự",
        "string.min": "{{#label}} phải lớn hơn hoặc bằng {{#limit}} ký tự",
        "string.normalize": "{{#label}} phải được chuẩn hoá unicode ở dạng {#form}} form",
        "string.token": "{{#label}} phải chứa các ký tự chỗ số và dấu gạch dưới",
        "string.pattern.base": "{{#label}} với giá trị là {:[.]} không khớp với pattern bắt buộc: {{#regex}}",
        "string.pattern.name": "{{#label}} với giá trị là {:[.]} không khớp với {{#name}} pattern",
        "string.pattern.invert.base": "{{#label}} với giá trị là {:[.]} phải phù với pattern: {{#regex}}",
        "string.pattern.invert.name": "{{#label}} với giá trị là {:[.]} phải khớp với dạng đảo ngược {{#name}} pattern",
        "string.trim": "{{#label}} không được có khoảng trắng ở đầu hoặc cuối",
        "string.uri": "{{#label}} phải là uri phù hợp",
        "string.uriCustomScheme": "{{#label}} phải là một uri phù với scheme khớp với {{#scheme}} pattern",
        "string.uriRelativeOnly": "{{#label}} phải là relative uri hợp lệ",
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
        "any.only": '{{#label}} phải {if(#valids.length == 1, "", "một trong ")}{{#valids}}',
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
        "array.includesRequiredBoth": "{{#label}} không bao gồm {{#knownMisses}} và {{#unknownMisses}} (các) giá trị bắt buộc khác",
        "array.includesRequiredKnowns": "{{#label}} không chứa {{#knownMisses}}",
        "array.includesRequiredUnknowns": "{{#label}} không chứa {{#unknownMisses}} (các) giá trị bắt buộc khác",
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

const BinaryVnLang = {
        "binary.base": "{{#label}} phải là một buffer hoặc một string",
        "binary.length": "{{#label}} phải là {{#limit}} bytes",
        "binary.max": "{{#label}} phải ít hơn hoặc bằng {{#limit}} bytes",
        "binary.min": "{{#label}} phải ít nhất {{#limit}} bytes",
};

const BooleanVnLang = {
        "boolean.base": "{{#label}} phải là một boolean",
};

const DateVnLang = {
        "date.base": "{{#label}} phải là một ngày hợp lệ",
        "date.format": '{{#label}} phải ở dạng {msg("date.format." + #format) || #format}',
        "date.greater": "{{#label}} phải lớn hơn {{:#limit}}",
        "date.less": "{{#label}} phải nhỏ hơn {{:#limit}}",
        "date.max": "{{#label}} phải bé hơn hoặc bằng {{:#limit}}",
        "date.min": "{{#label}} phải lớn hơn hoặc bằng {{:#limit}}",

        // Messages used in date.format

        "date.format.iso": "ISO 8601 date",
        "date.format.javascript": "Dấu thời gian hoặc số mili giây",
        "date.format.unix": "Dấu thời gian hoặc số giây",
};

const FunctionVnLang = {
        "function.arity": "{{#label}} phải có {{#n}} arity (số hàng của function)",
        "function.class": "{{#label}} phải là một class",
        "function.maxArity": "{{#label}} phải có arity (số hàng của function) nhỏ hơn hoặc bằng {{#n}}",
        "function.minArity": "{{#label}} phải có arity (số hàng của function) lớn hơn hoặc bằng {{#n}}",
};

const KeysVnLang = {
        "object.and": "{{#label}} chứa {{#presentWithLabels}} hiện mà không có sự hiện diện bắt buộc của {{#missingWithLabels}}",
        "object.assert":
                '{{#label}} không hợp lệ vì {if(#subject.key, `"` + #subject.key + `" failed to ` + (#message || "pass the assertion test"), #message || "the assertion failed")}',
        "object.base": "{{#label}} phải là kiểu {{#type}}",
        "object.instance": "{{#label}} phải là một phiên bản của {{:#type}}",
        "object.length": '{{#label}} phải có {{#limit}} key{if(#limit == 1, "", "s")}',
        "object.max": '{{#label}} phải nhỏ hơn hoặc bằng {{#limit}} key{if(#limit == 1, "", "s")}',
        "object.min": '{{#label}} phải có ít nhất {{#limit}} key{if(#limit == 1, "", "s")}',
        "object.missing": "{{#label}} phải chứa ít nhất một trong {{#peersWithLabels}}",
        "object.nand": "{{:#mainWithLabel}} không được tồn tại đồng thời với {{#peersWithLabels}}",
        "object.oxor": "{{#label}} chứa xung đột giữa các peers tuỳ chọn {{#peersWithLabels}}",
        "object.pattern.match": "{{#label}} keys không khớp với yêu cầu của pattern",
        "object.refType": "{{#label}} phải là một tham chiếu Joi ",
        "object.regex": "{{#label}} phải là một đối tượng RegExp",
        "object.rename.multiple":
                "{{#label}} không thể đổi tên {{:#from}} bởi vì nhiều đổi tên đã bị vô hiệu hoá và một key khác đã được đổi tên thành {{:#to}}",
        "object.rename.override": "{{#label}} không thể đổi tên {{:#from}} bởi vì tính năng ghi đè đã bị vô hiệu hoá và {{:#to}} đang tồn tại",
        "object.schema": "{{#label}} phải là một lượt đồ Joi thuộc loại {{#type}}",
        "object.unknown": "{{#label}} không được cho phép",
        "object.with": "{{:#mainWithLabel}} thiếu peer bắt buộc {{:#peerWithLabel}}",
        "object.without": "{{:#mainWithLabel}} xung độ với peer bị cấm {{:#peerWithLabel}}",
        "object.xor": "{{#label}} chứa xung đột giữa các peers độc quyền {{#peersWithLabels}}",
};

const SymbolVnLang = {
        "symbol.base": "{{#label}} phải là symbol",
        "symbol.map": "{{#label}} phải là một trong {{#map}}",
};

const ObjectVnLang = { ...KeysVnLang };

const JoiVnLang = {
        ...StringVnLang,
        ...NumberVnLang,
        ...AnyVnLang,
        ...AlternativesVnLang,
        ...ArrayVnLang,
        ...BinaryVnLang,
        ...BooleanVnLang,
        ...DateVnLang,
        ...FunctionVnLang,
        ...KeysVnLang,
        ...ObjectVnLang,
        ...SymbolVnLang,
};

export default JoiVnLang;

export {
        StringVnLang,
        NumberVnLang,
        AnyVnLang,
        AlternativesVnLang,
        ArrayVnLang,
        BinaryVnLang,
        BooleanVnLang,
        DateVnLang,
        FunctionVnLang,
        KeysVnLang,
        ObjectVnLang,
        SymbolVnLang,
};
