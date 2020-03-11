# docMz

### Run app 

1. Inside project folder run `npm install`
2. `react-native run-android`

### Build debug apk file

1. `cd android\app\src\main && md assets`
2. `cd ..\..\..\.. && react-native bundle --platform android --dev false --entry-file index.js   --bundle-output android/app/src/main/assets/index.android.bundle   --assets-dest android/app/src/main/res/`
3. `cd android && gradlew assembleDebug`

Locate apk file: ...\android\app\build\outputs\apk\debug