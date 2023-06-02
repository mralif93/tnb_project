cordova.define("cordova-plugin-mobile-signal.MobileSignal", function(require, exports, module) {
var exec = require('cordova/exec');

exports.getSignalStrength = function (success, error) {
    exec(success, error, 'MobileSignal', 'getSignalStrength');
};

});
