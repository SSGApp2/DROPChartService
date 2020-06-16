var JsonUtil = {};

JsonUtil.tryParseJSON = function (json){
    try {
        var jsonObject = JSON.parse(json);
        if (jsonObject && typeof jsonObject === "object") {
            return jsonObject;
        }
    }
    catch (e) {
        return json;
    }
};