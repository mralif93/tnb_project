var exec = require('cordova/exec');

exports.getSignalStrength = function (success, error) {
    exec(success, error, 'MobileSignal', 'getSignalStrength');
};
