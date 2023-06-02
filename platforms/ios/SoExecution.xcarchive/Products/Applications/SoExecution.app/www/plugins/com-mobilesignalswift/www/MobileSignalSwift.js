cordova.define("com-mobilesignalswift.MobileSignalSwift", function(require, exports, module) {
var exec = require('cordova/exec');

exports.getSignalStrength = function (success, error) {
    exec(success, error, 'MobileSignalSwift', 'getSignalStrength');
};

});
