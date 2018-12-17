Development Requirements: 
  - Android - https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html
  
  - IOS - https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html
    
  1. `cd` into root `teams-demo/demoApp` -- run `npm install`
  
  2.  run `cordova platform add ios` and `cordova platform add android`
  
  3. `cd platforms/ios/` -- run `open demoApp.xcodeproj/` - This opens Xcode
  
  4. run `cordova-icon` and `cordova-splash` -- This creates custom app icon and splash screen
  
  5. Assign Provisioning Profile -- See Apple Developer Docs
  
  Useful Commands: 

  `npm run build-ios` -- build ios project
  
  `npm run build-android` -- build android project
  
  `npm run em` -- emulate ios app in xcode
  
  `npm run sim-ios` -- sideload ios app on device 
  
  `npm run em-ios` -- emulate ios project
  
  `npm run sim-android` -- sideload android app on device
  
  `npm run em-ios` -- emulate android project
  
  `npm run build-platforms` -- build ios and android project
  
  `npm run em-platforms` -- emulate ios and androif project
