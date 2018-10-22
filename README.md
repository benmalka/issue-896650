# Issue 896650


## Please follow the next instructions:

1. In cmd, run chrome.exe with --remote-debugging-port
=9222 and --user-data-dir="./" flags
2. npm install
3. npm start


Expected result on chrome 69.0.3497.100
* A chrome browser should popup
* It should navigate to https://issue-896650.herokuapp.com
* 4 Log entries should apear as objects (Maybe 5 because of favicon.ico error)


Expected result on chrome 70.0.3538.67 (the issue)
* A chrome browser should popup
* It should navigate to https://issue-896650.herokuapp.com
* 2 Log entries should apear as objects (Maybe 5 because of favicon.ico error) - **Not as expected**


Expected result on chrome 70.0.3538.67 (with --headless)
* A chrome browser should popup
* It should navigate to https://issue-896650.herokuapp.com
* 4 Log entries should apear as objects (Maybe 5 because of favicon.ico error) - **As expected**

