/********* MobileSignal.m Cordova Plugin Implementation *******/

#import <Cordova/CDV.h>

@interface MobileSignal : CDVPlugin {
  // Member variables go here.
}

- (void)getSignalStrength:(CDVInvokedUrlCommand*)command;
/// Get UIStatusBar_Modern.
/// - (UIView *_Nullable)getUIStatusBarModern;
@end

@implementation MobileSignal

- (UIView *_Nullable)getUIStatusBarModern
{
    NSLog(@"getUIStatusBarModern>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    if (@available(iOS 13.0, *)) {
        NSLog(@"It is ios13");
        // We can still get statusBar using the following code, but this is not recommended.
        UIStatusBarManager *statusBarManager = [UIApplication sharedApplication].delegate.window.windowScene.statusBarManager;
        NSLog(@"Step 1");
        if ([statusBarManager respondsToSelector:@selector(createLocalStatusBar)]) {
            NSLog(@"Step 2");
            UIView *_localStatusBar = [statusBarManager performSelector:@selector(createLocalStatusBar)];
            NSLog(@"Step 3");
            if ([_localStatusBar respondsToSelector:@selector(statusBar)]) {
                NSLog(@"Step 4");
                return [_localStatusBar performSelector:@selector(statusBar)];
            }
        } else {
            NSLog(@"statusBarManager not working");
        }
    } else {
        NSLog(@"It is NOT ios13");
    }
    return [[UIApplication sharedApplication] valueForKey:@"_statusBar"];
}

- (void)getSignalStrength:(CDVInvokedUrlCommand*)command
{
    NSInteger bars;
    NSLog(@"MobileSignal>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    
    CDVPluginResult* pluginResult = nil;
    
    float version = [[UIDevice currentDevice].systemVersion floatValue];
    NSLog(@"version >>> %f", version);
    
    if (version >= 11.0 && version < 12.0) {
        if (@available(iOS 11.0, *)) {
            bars = [self getSignalStrengthIos11];
        }
    } else if (version >= 12.0 && version < 13.0) {
        if (@available(iOS 12.0, *)) {
            bars = [self getSignalStrengthIos13];
        }
    } else if (version >= 13.0) {
        if (@available(iOS 13.0, *)) {
            bars = [self getSignalStrengthIos13];
        }
    } else {
        bars = 0;
    }
    
    NSLog(@"type.integerValue >>>>>>>> %d", (int)bars);
    
    pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsInt:bars];
    
    if (bars != nil && (int)bars > 0 ) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsInt:bars];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (int)getSignalStrengthIos11 {
    NSLog(@"came inside to get signal strength ios 11..");
    
    UIView * statusBarModern = [self getUIStatusBarModern];
    
    NSArray *children = [[statusBarModern valueForKeyPath:@"foregroundView"] subviews];
    int data = 0;
    
    for (id child in children) {
        if ([child isKindOfClass:[NSClassFromString(@"UIStatusBarSignalStrengthItemView") class]]) {
            data = [[child valueForKeyPath:@"signalStrengthBars"] intValue];
            NSLog(@"data >>> %d", data);
            return data;
        }
    }
    
    return 0;
}

- (int)getSignalStrengthIos12 {
    NSLog(@"came inside to get signal strength ios 12..");
    
    NSString* type = 0;
    NSLog(@"type >>>>>>>> %@", type);
    UIView * statusBarModern = [self getUIStatusBarModern];
    
    if ([statusBarModern isKindOfClass:NSClassFromString(@"UIStatusBar_Modern")]) {
        // For iPhoneX
        NSArray *subviews = [[[statusBarModern valueForKeyPath:@"_statusBar"] valueForKeyPath:@"foregroundView"] subviews];
        NSLog(@"subviews >>> %@", subviews);
        for (id subview in subviews) {
             NSLog(@"subview >>> %@", subview);
            if ([subview isKindOfClass:NSClassFromString(@"_UIStatusBarStringView")]) {
                NSString *originalText = [subview valueForKey:@"text"];
                if ([originalText containsString:@"G"]) {
                    type = originalText;
                    NSLog(@"cellularView >>> %@", originalText);
                    return type.integerValue;
                }
            }
        }
    }
    
    return 0;
}

- (int) getSignalStrengthIos13 {
    NSLog(@"came inside to get signal strength ios 13..");
    
    NSString* type = 0;
    NSLog(@"type >>>>>>>> %@", type);
    UIView * statusBarModern = [self getUIStatusBarModern];
    
    if (statusBarModern) {
        // _UIStatusBarDataCellularEntry
        NSLog(@"Step 5");
        id currentData = [[statusBarModern valueForKeyPath:@"_statusBar"] valueForKeyPath:@"currentData"];
        NSLog(@"Step 6");
        id _cellularEntry = [currentData valueForKeyPath:@"cellularEntry"];
        NSLog(@"Step 7");
        type = [_cellularEntry valueForKeyPath:@"displayValue"];
        NSLog(@"type >>>>>>>> %@", type);
        return type.integerValue;
    }
    
    return 0;
}

@end
