cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com-badrit-base64.Base64",
      "file": "plugins/com-badrit-base64/www/Base64.js",
      "pluginId": "com-badrit-base64",
      "clobbers": [
        "navigator.Base64"
      ]
    },
    {
      "id": "com-mobilesignalswift.MobileSignalSwift",
      "file": "plugins/com-mobilesignalswift/www/MobileSignalSwift.js",
      "pluginId": "com-mobilesignalswift",
      "clobbers": [
        "mobilesignalswift"
      ]
    },
    {
      "id": "com-moduscreate-plugins-echo.ModusEcho",
      "file": "plugins/com-moduscreate-plugins-echo/www/ModusEcho.js",
      "pluginId": "com-moduscreate-plugins-echo",
      "clobbers": [
        "modusecho"
      ]
    },
    {
      "id": "cordova-pdf-generator.pdf",
      "file": "plugins/cordova-pdf-generator/www/pdf.js",
      "pluginId": "cordova-pdf-generator",
      "clobbers": [
        "cordova.plugins.pdf",
        "pugin.pdf",
        "pdf"
      ]
    },
    {
      "id": "cordova-plugin-calendar.Calendar",
      "file": "plugins/cordova-plugin-calendar/www/Calendar.js",
      "pluginId": "cordova-plugin-calendar",
      "clobbers": [
        "Calendar"
      ]
    },
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/cordova-plugin-camera/www/ios/CameraPopoverHandle.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-dialogs.notification",
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "id": "cordova-plugin-file.DirectoryEntry",
      "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.DirectoryReader",
      "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.DirectoryReader"
      ]
    },
    {
      "id": "cordova-plugin-file.Entry",
      "file": "plugins/cordova-plugin-file/www/Entry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Entry"
      ]
    },
    {
      "id": "cordova-plugin-file.File",
      "file": "plugins/cordova-plugin-file/www/File.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.File"
      ]
    },
    {
      "id": "cordova-plugin-file.FileEntry",
      "file": "plugins/cordova-plugin-file/www/FileEntry.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileEntry"
      ]
    },
    {
      "id": "cordova-plugin-file.FileError",
      "file": "plugins/cordova-plugin-file/www/FileError.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileError"
      ]
    },
    {
      "id": "cordova-plugin-file.FileReader",
      "file": "plugins/cordova-plugin-file/www/FileReader.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileReader"
      ]
    },
    {
      "id": "cordova-plugin-file.FileSystem",
      "file": "plugins/cordova-plugin-file/www/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadOptions",
      "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadOptions"
      ]
    },
    {
      "id": "cordova-plugin-file.FileUploadResult",
      "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileUploadResult"
      ]
    },
    {
      "id": "cordova-plugin-file.FileWriter",
      "file": "plugins/cordova-plugin-file/www/FileWriter.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.FileWriter"
      ]
    },
    {
      "id": "cordova-plugin-file.Flags",
      "file": "plugins/cordova-plugin-file/www/Flags.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Flags"
      ]
    },
    {
      "id": "cordova-plugin-file.LocalFileSystem",
      "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.LocalFileSystem"
      ],
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.Metadata",
      "file": "plugins/cordova-plugin-file/www/Metadata.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.Metadata"
      ]
    },
    {
      "id": "cordova-plugin-file.ProgressEvent",
      "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.ProgressEvent"
      ]
    },
    {
      "id": "cordova-plugin-file.fileSystems",
      "file": "plugins/cordova-plugin-file/www/fileSystems.js",
      "pluginId": "cordova-plugin-file"
    },
    {
      "id": "cordova-plugin-file.requestFileSystem",
      "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
      "pluginId": "cordova-plugin-file",
      "clobbers": [
        "window.requestFileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.resolveLocalFileSystemURI",
      "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "window"
      ]
    },
    {
      "id": "cordova-plugin-file.isChrome",
      "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.iosFileSystem",
      "file": "plugins/cordova-plugin-file/www/ios/FileSystem.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "FileSystem"
      ]
    },
    {
      "id": "cordova-plugin-file.fileSystems-roots",
      "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
      "pluginId": "cordova-plugin-file",
      "runs": true
    },
    {
      "id": "cordova-plugin-file.fileSystemPaths",
      "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
      "pluginId": "cordova-plugin-file",
      "merges": [
        "cordova"
      ],
      "runs": true
    },
    {
      "id": "cordova-plugin-file-opener2.FileOpener2",
      "file": "plugins/cordova-plugin-file-opener2/www/plugins.FileOpener2.js",
      "pluginId": "cordova-plugin-file-opener2",
      "clobbers": [
        "cordova.plugins.fileOpener2"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.Coordinates",
      "file": "plugins/cordova-plugin-geolocation/www/Coordinates.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "Coordinates"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.PositionError",
      "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "PositionError"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.Position",
      "file": "plugins/cordova-plugin-geolocation/www/Position.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "Position"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.geolocation",
      "file": "plugins/cordova-plugin-geolocation/www/geolocation.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "cordova-plugin-globalization.GlobalizationError",
      "file": "plugins/cordova-plugin-globalization/www/GlobalizationError.js",
      "pluginId": "cordova-plugin-globalization",
      "clobbers": [
        "window.GlobalizationError"
      ]
    },
    {
      "id": "cordova-plugin-globalization.globalization",
      "file": "plugins/cordova-plugin-globalization/www/globalization.js",
      "pluginId": "cordova-plugin-globalization",
      "clobbers": [
        "navigator.globalization"
      ]
    },
    {
      "id": "cordova-plugin-hello-world.HelloWorld",
      "file": "plugins/cordova-plugin-hello-world/www/HelloWorld.js",
      "pluginId": "cordova-plugin-hello-world",
      "clobbers": [
        "cordova.plugins.HelloWorld"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open",
        "window.open"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/ios/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.ios-wkwebview-exec",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/ios/ios-wkwebview-exec.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "cordova.exec"
      ]
    },
    {
      "id": "cordova-plugin-mfp.mfp",
      "file": "plugins/cordova-plugin-mfp/bootstrap.js",
      "pluginId": "cordova-plugin-mfp",
      "runs": true
    },
    {
      "id": "cordova-plugin-mfp-jsonstore.jsonstore",
      "file": "plugins/cordova-plugin-mfp-jsonstore/bootstrap.js",
      "pluginId": "cordova-plugin-mfp-jsonstore",
      "runs": true
    },
    {
      "id": "cordova-plugin-mobile-signal.MobileSignal",
      "file": "plugins/cordova-plugin-mobile-signal/www/MobileSignal.js",
      "pluginId": "cordova-plugin-mobile-signal",
      "clobbers": [
        "cordova.plugins.MobileSignal"
      ]
    },
    {
      "id": "cordova-plugin-nativestorage.mainHandle",
      "file": "plugins/cordova-plugin-nativestorage/www/mainHandle.js",
      "pluginId": "cordova-plugin-nativestorage",
      "clobbers": [
        "NativeStorage"
      ]
    },
    {
      "id": "cordova-plugin-nativestorage.LocalStorageHandle",
      "file": "plugins/cordova-plugin-nativestorage/www/LocalStorageHandle.js",
      "pluginId": "cordova-plugin-nativestorage"
    },
    {
      "id": "cordova-plugin-nativestorage.NativeStorageError",
      "file": "plugins/cordova-plugin-nativestorage/www/NativeStorageError.js",
      "pluginId": "cordova-plugin-nativestorage"
    },
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection",
        "navigator.network.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "cordova-plugin-request-location-accuracy.RequestLocationAccuracy",
      "file": "plugins/cordova-plugin-request-location-accuracy/www/ios/RequestLocationAccuracy.js",
      "pluginId": "cordova-plugin-request-location-accuracy",
      "clobbers": [
        "cordova.plugins.locationAccuracy"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-telerik-imagepicker.ImagePicker",
      "file": "plugins/cordova-plugin-telerik-imagepicker/www/imagepicker.js",
      "pluginId": "cordova-plugin-telerik-imagepicker",
      "clobbers": [
        "plugins.imagePicker"
      ]
    },
    {
      "id": "cordova-plugin-x-toast.Toast",
      "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
      "pluginId": "cordova-plugin-x-toast",
      "clobbers": [
        "window.plugins.toast"
      ]
    },
    {
      "id": "cordova-sqlite-storage.SQLitePlugin",
      "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
      "pluginId": "cordova-sqlite-storage",
      "clobbers": [
        "SQLitePlugin"
      ]
    },
    {
      "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
      "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
      "pluginId": "phonegap-plugin-barcodescanner",
      "clobbers": [
        "cordova.plugins.barcodeScanner"
      ]
    }
  ];
  module.exports.metadata = {
    "com-badrit-base64": "0.2.0",
    "com-mobilesignalswift": "0.0.1",
    "com-moduscreate-plugins-echo": "0.0.2",
    "cordova-pdf-generator": "2.0.4",
    "cordova-plugin-calendar": "5.1.2",
    "cordova-plugin-camera": "4.0.3",
    "cordova-plugin-crosswalk-webview": "1.8.0",
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-dialogs": "2.0.2",
    "cordova-plugin-file": "6.0.1",
    "cordova-plugin-file-opener2": "2.0.19",
    "cordova-plugin-filepath": "1.0.2",
    "cordova-plugin-geolocation": "4.0.1",
    "cordova-plugin-globalization": "1.11.0",
    "cordova-plugin-hello-world": "0.0.1",
    "cordova-plugin-inappbrowser": "3.1.0",
    "cordova-plugin-ionic-keyboard": "2.0.5",
    "cordova-plugin-ionic-webview": "1.1.19",
    "cordova-plugin-mfp": "8.0.2019091217",
    "cordova-plugin-mfp-jsonstore": "8.0.2019050614",
    "cordova-plugin-mobile-signal": "0.0.1",
    "cordova-plugin-nativestorage": "2.3.2",
    "cordova-plugin-network-information": "2.0.1",
    "cordova-plugin-request-location-accuracy": "2.2.3",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-telerik-imagepicker": "2.3.3",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-x-toast": "2.6.2",
    "cordova-sqlite-storage": "5.0.0",
    "phonegap-plugin-barcodescanner": "7.0.4"
  };
});