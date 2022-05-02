## Introduction

This project extends the functionality of the Open Source React Libraries for Mobile Browser Sensor Development capstone project.  Additional libraries will be published to the Node Package Manager (online) which is the central location for all public Node and React modules.

## Getting Started

### Project Setup

- Latest release of [Node.js](https://nodejs.org/en/) recommended
- The development environment currently only works on Mac OS X (Linux not yet tested)
- Navigate to the repository directory run `npm install` to build dependencies

```
git clone git@github.com:masaok/react-mobile-sensors-demo.git
cd react-mobile-sensor-demo
yarn
HTTPS=true yarn start  # Start in secure HTTPS mode to allow access to mobile sensors
```

### Pixel Phone Setup (Android)

1. Connect your phone to your Mac via a USB-C cable
1. Go to Settings
    1. Go to "About Phone"
1. Go to Settings
    1. Go to “About Phone”
    1. Tap on “Build Number” seven times (this only needs to be done once)
    1. Go to previous screen
1. Go to System
    1. Go to Developer Options at the bottom
    1. Enable Developer Options (once)
    1. Enable USB debugging

### Chrome Desktop Setup

1. Go to: chrome://inspect/#devices
1. See listed browser tabs
1. Click “inspect” on any tab and it should open a separate browser window which is in-sync with your phone browser.
1. Then you can inspect the DOM as usual
1. NOTE: If you disconnect the phone, you must close the tab, then restart the tab again and load React all over again
