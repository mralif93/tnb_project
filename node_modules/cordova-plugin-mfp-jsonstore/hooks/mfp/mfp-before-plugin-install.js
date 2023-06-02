/*
   Licensed Materials - Property of IBM

   (C) Copyright 2015, 2016 IBM Corp.

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

// Public modules
var path = require('path');
var strings = require('ibm-strings');
var log = require('npmlog');
var util = require('util');
var fs = require('fs');
var et = require('elementtree');

// MFP modules
var hookConsts = require('./../utils/hook-consts');
var externalizedStrings = require('./../externalizedStrings');
var MFPHook = require('./mfp-hook');


/*
This class determines which platform specific before_plugin_install hook to
instantiate, and invoke.
 */
function MFPBeforePluginInstall(context) {
    var platformPath; // Path to platform
    var currentPlatforms; // Installed platforms
    var projectRoot; // Path to project
    var args; // User arguments
    var pluginName; // Name of plugin

    MFPHook.apply(this);
    MFPBeforePluginInstall.prototype = MFPHook.prototype;

    currentPlatforms = context.opts.cordova.platforms;
    projectRoot = path.resolve(context.opts.projectRoot);
    args = MFPBeforePluginInstall.prototype.getArguments(context.cmdLine);
    pluginName = context.opts.plugin.id;


    // If the user did not supply any platforms, use all the installed
    // platforms
    if (currentPlatforms.length === 0) {
        currentPlatforms = MFPAfterPrepare.prototype.getInstalledPlatforms(
            path.join(projectRoot, 'platforms')
        );
    }


    MFPBeforePluginInstall.prototype.setLogLevel(args);
    logSilly('Cordova context: ' + util.inspect(context));
    logSilly('Project root: ' + projectRoot);
    logSilly('Current platforms: ' + currentPlatforms);
    logSilly('Arguments: ' + args);

  /*This function modifies the build-extras.gradle file based on the mfp:support64BitMode setting defined in the 
    config.xml file.If mfp:support64BitMode set to true application set to work in 64 bit mode else 32 bti mode
   */

    function modifyBuildExtraGradle() {
        try {

            var buildExtraPath = fs.readFileSync(path.join(projectRoot, hookConsts.BUILD_EXTRAS_GRADLE_PATH)).toString(); //Read the build-extras.gradle file 
            var manifestContent = fs.readFileSync(path.join(projectRoot, 'config.xml')).toString(); //Read the config.xml file

            var manifest = et.parse(manifestContent); //parse config.xml  contents
            var AndroidSettings = manifest.findall("./mfp:android");

            var support64BitModeFlag;
            //Read the support64BitMode setting defined in config.xml
            for (var i = 0; i < AndroidSettings.length; i++) {
                var support = AndroidSettings[i];
                try {
                    support64BitModeFlag = support.find('mfp:mode64bit').text;
                } catch (err) {
                    support64BitModeFlag = 'false'; //if  mfp:mode64bit setting  is undefined then set to default 32 arch
                }
            }

            if (support64BitModeFlag == 'true') { //Change build-extras.gradle content to support 64 bit arch
                buildExtraPath = hookConsts.DATA_FOR_64_BIT;
            } else { //Change build-extras.gradle content to support 32 bit arch
                buildExtraPath = hookConsts.DATA_FOR_32_BIT;
            }
            fs.writeFileSync(path.join(projectRoot, hookConsts.BUILD_EXTRAS_GRADLE_PATH), buildExtraPath); //write into build-extras.gradle file

        } catch (err) {
            throw strings.format(hookConsts.ANDROID, '/n error is : ', err.message);
        }

    }



    /*
    Displays a log silly message. The log level must be set to silly.

    message - The message to log
     */
    function logSilly(message) {
        log.silly(hookConsts.MFP_BEFORE_PLUGIN_INSTALL, message);
    }

    /*
    Displays a log verbose message. The log level must be set to verbose.

    message - The message to log
     */
    function logVerbose(message) {
        log.verbose(hookConsts.MFP_BEFORE_PLUGIN_INSTALL, message);
    }

    /*
    Calls the platform specific hooks bassed on the platforms based. If an
    unsupported platform is passed, a warning message is displayed.

    currentPlatforms - Platforms to invoke hooks for
     */
    function invokePlatformHooks(currentPlatforms) {
        logVerbose('Invoking platform specific hooks.');

        // For each installed platform, invoke platform specific hook
        currentPlatforms.forEach(
            function(platformId) {
                platformPath = path.join(projectRoot, 'platforms', platformId);

                // Determine which hook to invoke based on the current platform
                if (platformId === hookConsts.ANDROID)
                    modifyBuildExtraGradle();//Modify build-extras.gradle
              
            }
        );
    }

    /*
    Determines which hook platform specific before_plugin_install hook to
    instantiate, and invoke.
     */
    this.invokeHook = function() {
        logVerbose('Preforming MFP after prepare hook.');
        invokePlatformHooks(currentPlatforms);
    };

}

module.exports = MFPBeforePluginInstall;