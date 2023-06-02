/********* HelloWorld.m Cordova Plugin Implementation *******/

#import <Cordova/CDV.h>

@interface HelloWorld : CDVPlugin {
  // Member variables go here.
}

- (void)coolMethod:(CDVInvokedUrlCommand*)command;
@end

@implementation HelloWorld

- (void)coolMethod:(CDVInvokedUrlCommand*)command
{
    NSLog(@"HelloWorld>>>>>>>>>>>>>>>>>>>>>>");
    CDVPluginResult* pluginResult = nil;
    NSString* echo = [command.arguments objectAtIndex:0];
    NSLog(@"echo >>>>>>>> %@", echo);

    if (echo != nil ) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echo];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
