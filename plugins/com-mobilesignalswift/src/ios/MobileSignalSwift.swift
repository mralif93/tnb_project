import UIKit
import CoreTelephony

@objc(MobileSignalSwift) class MobileSignalSwift : CDVPlugin {
    @objc(getSignalStrength:)
    func getSignalStrength(command: CDVInvokedUrlCommand) {
        var pluginResult = CDVPluginResult(
            status: CDVCommandStatus_ERROR
        )
        
        var systemVersion = UIDevice.current.systemVersion
        print (" version  : \(systemVersion)")
        let bars : Int;
        
        if #available(iOS 11, *) {
            bars = getSignalStrengthIos13();
            // handle older versions
        } else if #available(iOS 12, *) {
            bars = getSignalStrengthIos12();
            // use iOS 11-only feature
        } else {
            bars = getSignalStrengthIos13();
            // use iOS 11-only feature
        }
        
        print("    test     : \(bars)");
        //if bars > 0 {
        pluginResult = CDVPluginResult(
            status: CDVCommandStatus_OK,
            messageAs: bars
        )
        //}
        
        self.commandDelegate!.send(
            pluginResult,
            callbackId: command.callbackId
        )
    }
    
    
    private func getSignalStrengthIos11() -> Int {
        
        /*
         print("came inside to get signal strength ios 11 ");
         //alert("tetsss");
         
         let libHandle = dlopen ("/System/Library/Frameworks/CoreTelephony.framework/CoreTelephony", RTLD_LOCAL | RTLD_LAZY | RTLD_NOW)
         print (libHandle)
         let CTGetSignalStrength2 = dlsym(libHandle, "CTGetSignalStrength")
         typealias CFunction = @convention(c)  () -> String
         
         //dlclose(CTGetSignalStrength2)
         
         print (CTGetSignalStrength2)
         if (CTGetSignalStrength2 != nil) {
         let fun = unsafeBitCast(CTGetSignalStrength2!, to: CFunction.self)
         let result = fun()
         print("!!!!result \(result)")
         return result;
         
         }
         return "0"
         */
        
        print("came inside to get signal strength ios 11 ");
        let application = UIApplication.shared
        print("application shared : ");
        if let statusBarView = application.value(forKey: "statusBar") as? UIView {
            for subbiew in statusBarView.subviews {
                print("SubView: \(subbiew.classForKeyedArchiver.debugDescription)")
                if subbiew.classForKeyedArchiver.debugDescription == "Optional(UIStatusBarForegroundView)" {
                    for subbiew2 in subbiew.subviews {
                        print("SubView 2: \(subbiew2.classForKeyedArchiver.debugDescription)")
                        if subbiew2.classForKeyedArchiver.debugDescription == "Optional(UIStatusBarSignalStrengthItemView)" {
                            let bars = subbiew2.value(forKey: "signalStrengthBars") as! Int
                            print("bars \(bars)")
                            return bars
                        }
                    }
                }
            }
        }
        return 0 ///NO SERVICE
    }
    
    
    private func getSignalStrengthIos12() -> Int {
        let application = UIApplication.shared
        let statusBarView = application.value(forKey: "statusBar") as! UIView
        
        let statusBar = statusBarView.value(forKey: "statusBar") as! UIView
        let foregroundView = statusBar.value(forKey: "foregroundView") as! UIView
        
        for subview in foregroundView.subviews {
            print(" subview \(subview)")
            print("count  ", (subview.subviews.count))
            
            if subview.isKind(of: NSClassFromString("_UIStatusBarSignalView")!) {
                print("child value  \(subview)")
                return subview.value(forKey: "_numberOfActiveBars") as? Int ?? 0
            }
        }
        return 0
    }

    private func getSignalStrengthIos13() -> Int {
        print("came inside to get signal strength ios 13 ");
        
        return 0
    }
    
    
}

