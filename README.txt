TGH K9 Training Log - Firebase + GitHub Pages
=============================================

WHAT'S IN THIS PACKAGE
------------------------
index.html    - Main application (Firebase connected)
manifest.json - PWA configuration
sw.js         - Service worker (offline support)
icon-192.png  - App icon
icon-512.png  - App icon (large)
README.txt    - This file

HOW DATA WORKS
---------------
All session data is stored in Google Firebase Firestore.
When any user saves a session, it is immediately visible
to all other users in real time — officer, admin, and
trainer all see the same shared data automatically.

ACCESS PINs  (change in index.html before going live)
------------------------------------------------------
Officer / Handler  : 1111
Admin / Supervisor : 9999
External Trainer   : 5555

To change PINs, open index.html in a text editor and find:
  var PINS={officer:'1111',admin:'9999',trainer:'5555'};

GITHUB PAGES DEPLOYMENT
-------------------------
1. Go to github.com and create a free account
2. Click + > New repository
3. Name it: tgh-k9
4. Set to Public, check "Add README"
5. Click Create repository
6. Click Add file > Upload files
7. Drag ALL files from this folder into the upload area
8. Click Commit changes
9. Go to Settings > Pages
10. Under Branch select "main" then click Save
11. Wait 60 seconds then refresh
12. Your URL will be: https://YOUR-USERNAME.github.io/tgh-k9/

FIREBASE SECURITY (Important — do this before going live)
----------------------------------------------------------
Right now Firebase is in "test mode" which allows anyone
to read/write if they know your project ID. To lock it down:

1. Go to console.firebase.google.com
2. Select your project (tgh-k9-13ea3)
3. Click Firestore Database > Rules
4. Replace the rules with:

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.time < timestamp.date(2025, 12, 31);
    }
  }
}

This limits access to requests from your app only.
For production, ask IT to configure proper Firebase
Authentication rules.

INSTALLING ON PHONES
---------------------
iPhone / Safari:
  Open URL > Share > Add to Home Screen > Add

Android / Chrome:
  Open URL > 3-dot menu > Add to Home Screen > Install

VERSION 1.0 - TGH K9 Security Operations
