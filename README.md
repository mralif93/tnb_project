# TNB Project
* OPC
* LPC
* SEAL

# Requirements
* Node JS : v7.10.1
* NPM     : 3.10.10
* Ionic   : 3.20.1
* Cordova : 7.1.0
* MFPDev  : 8.0.0-2018040312
* XCode   : latest

# Check Version
* node -v
* npm -v
* ionic -v
* cordova -v
* mfpdev -v

# Installations Guide
* Node JS & NPM download from https://nodejs.org/en/blog/release/v7.10.1
* If npm different version, run command `npm install -g npm@3.10.10`
* Ionic, run command `npm install -g ionic@3.20.1`
* Cordova, run command `npm install -g cordova@7.1.0`
* MFPDev, run command `npm install -g mfpdev-cli@8.0-2018040312`
* Rosetta 2, run command `softwareupdate --install-rosetta`

# Build iOS Application
* ionic cordova build ios --buildFlag="-UseModernBuildSystem=0"
* Open Xcode, open project folder, platforms > ios > SoExecution.xcodeproj, then build & run.
