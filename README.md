# JS-Extractor [![Build Status](https://travis-ci.org/GauravV-02/JS-Extractor.svg?branch=master)](https://travis-ci.org/GauravV-02/JS-Extractor)
A JavaScript library to to get info about a given file.

## Functionality
    * Returns the file name, given an absolute or relative file path
    * Returns the file size, given an absolute or relative file path
    * Returns the SHA1 digest for the specified file's contents
    * Returns the MD5 digest for the specified file's contents

## Installation instructions
Step 1: Clone or fork the repo <br>
Step 2: Go into JS-Extractor folder <br>
Step 3: Using git or your command line run `npm install` to install all dependencies <br>
Step 4: Open the cloned project folder with your favourite editor (Visual Studio Code recommanded)<br><br><br>

## Debugging
If you are using Visual Studio Code you can run this project from the built-in node.js environment, below is how you run the code in the debug mode<br>
Step 1: Open index.js file<br>
Step 2: To debug, click the spider icon on the left panel<br>
Step 3: On the top of the editor click on the play button and select nodejs to run the scripts. <br>

Once you run successfully, the script output will be displayed in the debug console pane on the bottom of the editor

## About the sh1 digest function
For the sha1 digest, a library called js-sha1 is being used, written by emn178. The library can be installed with Bower with the command

`bower install js-sha1`

Or with node.js, with the command 

`npm install js-sha1`

## License
This project is licensed under the MIT License. Please see the LICENSE file for details.

