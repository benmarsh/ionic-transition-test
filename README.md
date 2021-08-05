# ionic-transition-test

🔗 https://github.com/ionic-team/ionic-framework/issues/23732

**Current Behavior**

On iOS 14.7, when transitioning to a new page and loading external content from an API at the same time, the animation glitches.

The glitch is not present when content is loaded before the transition, or when content is loaded after the transition has occurred, only during. It is also not present on iOS 14.5 or on other browsers. See additional information for details of what I tested.

**Expected Behavior**

When transitioning to a new page, it should slide in smoothly.

**Steps to Reproduce**

To see the issue with the transition, run the simple demo application in either Safari 14.1.2, or on an iOS simulator or device with a version above 14.5. The application is a minimal example to demonstrate the problem.

**Code Reproduction URL**

https://github.com/benmarsh/ionic-transition-test

**Ionic Info**

Ionic:

Ionic CLI : 6.16.3 (/usr/local/lib/node_modules/@ionic/cli)
Ionic Framework : @ionic/angular 5.6.13
@angular-devkit/build-angular : 12.1.4
@angular-devkit/schematics : 12.1.4
@angular/cli : 12.1.4
@ionic/angular-toolkit : 4.0.0

Capacitor:

Capacitor CLI : 3.1.2
@capacitor/android : not installed
@capacitor/core : 3.1.2
@capacitor/ios : 3.1.2

Utility:

cordova-res : not installed globally
native-run : 1.4.0

System:

NodeJS : v14.17.0 (/usr/local/Cellar/node@14/14.17.0/bin/node)
npm : 6.14.13
OS : macOS Big Sur

**Additional Information**

I believe this is the same bug as reported on #23432 - I've included a sample repo and some videos which I hope will help with reproduction of this issue.

This only appears to happen in iOS versions higher than 14.5. Running the demo application in a 14.5 simulator shows no glitch, on a real device running 14.7 the glitch is present. Interestingly, the glitch also is observed in Safari 14.1.2 on Mac OS Big Sur 11.5.1, but not in Firefox 90 or Chrome 92 on the same desktop machine.

I first noticed this problem with some production code after the iOS 14.6 update. However the same issue is also visible using this simple demo code.

**Demo Videos**

Real iPhone X running iOS 14.7 = transition animation glitch visible

https://github.com/benmarsh/ionic-transition-test/blob/master/ionic-transition-test-iphone-ios-14-7.mp4

Mac running Big Sur 11.5.1 and Safari 14.1.2 = transition animation glitch visible

https://github.com/benmarsh/ionic-transition-test/blob/master/ionic-transition-test-mac-safari-14-1-2.mp4

Simulator running iOS 14.5 = no glitch

https://github.com/benmarsh/ionic-transition-test/blob/master/ionic-transition-test-simulator-ios-14-5.mp4
