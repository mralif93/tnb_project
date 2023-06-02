/*
   Licensed Materials - Property of IBM

   (C) Copyright 2016 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

/*jslint node:true */
/*jshint node:true */

'use strict';

var path = require('path');

define('path', require('path'));

function define(name, value) {
    Object.defineProperty(exports, name, {
        value: value,
        enumerable: true
    });
}

// Platforms
define('ANDROID', 'android');

define('ANDROID_GT_EQ_7',path.join('android','app','src','main'));
define('SRC_LIB',path.join('platforms',this.ANDROID_GT_EQ_7));
define('PLATFORM_ANDROID',path.join('platforms','android'));

define('IOS', 'ios');
define('WINDOWS', 'windows');
define('WINDOWS_8', 'windows8');
define('WINDOWS_PHONE_8', 'windowsphone8');
define('WINDOWS_10', 'windows10');
define('PREVIEW', 'preview');
define('IPHONE', 'iphone');

define('NODE_MODULES',path.join('node_modules', 'cordova-android','VERSION'));

// Logging
define('SILLY', 'silly');
define('VERBOSE', 'verbose');

// Hooks
define('IOS_AFTER_PREPARE', 'ios-after-prepare');
define('AFTER_PREPARE_HOOK', 'after-prepare');
define('HOOK', 'hook');
define('MFP_AFTER_PREPARE', 'mfp-after-prepare');
define('MFP_HOOK', 'mfp-hook');
define('BEFORE_PLUGIN_INSTALL', 'before_plugin_install');


// Path data
define('MFP_PLUGIN_DIR', path.join('plugins', 'cordova-plugin-mfp'));

define('WWW_DIR_IOS', path.join('platforms', 'ios', 'www'));

//{platform}/{wwwDir}/plugins/cordova-plugin-mfp/worklight
define('WORKLIGHT_DIR', path.join('plugins', 'cordova-plugin-mfp', 'worklight'));

define('WORKLIGHT_DIR_IOS', path.join(this.WWW_DIR_IOS, this.WORKLIGHT_DIR));

define('WORKLIGHT_PATH', path.join(this.WORKLIGHT_DIR, 'worklight.js'));

define('WORKLIGHT_PATH_IOS', path.join(this.WWW_DIR_IOS, this.WORKLIGHT_PATH));

define('AFTER_PREPARE', 'after_prepare');

define('BEFORE_PREPARE', 'before_prepare');



define('CONFIG_XML', 'config.xml');
define('PLATFORM', 'platform');
define('NAME', 'name');
define('UPDATE', 'update');
define('SRC', 'src');
define('TARGET', 'target');
define('HTTPS', 'https');
define('EMBEDDED', 'embedded');
define('TRUE', 'true');

define('X_CODE_PROJ', '.xcodeproj');

define('DATA_FOR_64_BIT',"android {\n\tpackagingOptions {\n\t\texclude 'lib/armeabi/libopenssl_fips.so'\n\t\texclude 'lib/armeabi-v7a/libopenssl_fips.so'\n\t\texclude 'lib/x86/libopenssl_fips.so'\n\t}\n}");
define('DATA_FOR_32_BIT','android {\n\tdefaultConfig {\n\t\tndk {\n\t\t\tabiFilters "armeabi", "armeabi-v7a", "x86"\n\t\t}\n\t}\n}');
define('BUILD_EXTRAS_GRADLE_PATH', path.join('plugins','cordova-plugin-mfp-jsonstore','src','android','build-extras.gradle'));

