# A Threejs example with Node+Express and Webpack

For making this project works you should download it
`cd project_name`
`npm i`
`npm build`
`npm start`

## Threejs main files
```
+public
    dist
        bundle.js
        index.html
    images
    javascript
        src
            app.js
    stylesheet
```
As the above directories three shows, threre are three files you should keep on mind always:
-  `bundle.js` This is the output from webpack settings file.
-  `index.html` This is a static template that you can use if you wish to check your bundle from webpack server.
-   `app.js` this is the Threejs frontend file which webpack use for generating the bundle.js ouput.

## Expressjs
This expressjs server was created by `express-generator` command, afther that I had made some changes in the file `/views/index.ejs` for allowing it to load the `bundle.js` file and so make use of the canvas.

