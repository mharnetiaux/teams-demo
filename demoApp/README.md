Development Requirements: 
  - install xcode
  - install cordova
    
  1. `cd` into root `teams-demo/demoApp` -- run `npm install`
  
  2.  run `cordova platform add ios`

  3. `cd platforms/ios/` -- run `open demoApp.xcodeproj/`
  
  4. run `cordova-icon` and `cordova-splash` -- This creates custom app icon and splash screen
  
  5. Assign Provisioning Profile -- See Apple Developer Docs
  
  Useful Commands: 

  `npm run build` -- build ios project
  
  `npm run em` -- emulate ios app in xcode
  
  `npm run sim` -- sideload ios app on device 
