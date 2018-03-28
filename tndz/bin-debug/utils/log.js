// TypeScript file
var Log;
(function (Log) {
    function log(message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        egret.log(message ? message : optionalParams);
    }
    Log.log = log;
    function error(message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        egret.error(message ? message : optionalParams);
    }
    Log.error = error;
})(Log || (Log = {}));
//# sourceMappingURL=log.js.map