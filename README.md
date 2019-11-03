### Webpack Parctice

Just playing around the webpack. With its loaders, plugins and different files.
Since it is the basic of ever new modern web applicaton. Every modern web application requires bundling and managing different files and tarnspiler.

Webapck is most widely used bundler in the industry. It has huge community support.

##### Used packages/plugins in this repos:
	- webpack 
	- webpack-cli
	- css-loader
	- style-loader
	- sass-loader
	- node-sass
	- webpack-merge
	- webpack-dev-server
	- html-loader
	- file-loader
	- clean-webpack-plugin
	- html-webpack-plugin
	- mini-css-extract-plugin
	- optimize-css-assets-webpack-plugin
	- ts-loader
    - typescript
    - Bootstrap
    - jquery
	- popper.js
	

##### Following things I have did from beginning till now +_+
1. Added `webpack` & `webpack-cli` package which are responsible for the bundling the application
2. Created `webpack.config.js` file with 2 properties i.e. `entry` & `output`
3. By default webpack search entry point as `./src/index.js`
4. So created the file and added the my project entry point i.e. `app.js` in `index.js`
5. Output is an object which defines the output file which will generate after bundling, we can give any name to it, but we are using `main.js`. And output folder name is as `dist`
6. So when we run `npm start` `main.js` will be generated in `dist` folder
7. Earlier we were using multiple script tag to point each and every js in our application, so removed all script tags and added only one pointing `dist/main.js` file. Since this file will be having all the source code from every js files
8. Added `css-loader` & `style-loader` to the application
9. `css-loader` will convert our `.css` to commonJS syntax
10. And `style-loader` will inject those commonJS chunks to our `main.js`
11. Added `sass-loader` to have scss support in the application
12. There were issue due to caching of file, that is solved with the help of `contentHash`.
13. So when file is generated it will be having md5 hash in the filename like `main.2bdeb195e8df98d6ace4.bundle.js`
14. So now every time new `main.js` is generating but it is not injecting in `index.html` since, we are not sure about generated hashcode
15. So added `html-webpack-plugin` package, which will take a template and inject the required script into the template.So we have created new `src/template.html` file
16. Added the `html-webpack-plugin` to webpack file and pointed to `template.html` file
17. Since we have `dev` & `prod` two different environments so created two new webpack file one for each environments
18. And also crated `webpack-common-config` file which will hold all the things which are common between them
19. Added `webpack-merge` package so that we can merge `webpack-common & webpack-dev/webpack-prod`
20. Deleted the `webpack-config` file since it is no longer needed
21. Updated the files names used in `start` & `build` script in `package.json` file
22. Added `webpack-dev-server` to have local server while development and updated the `start` script in `package.json`
23. Added `html-loader` package to help loading static contents like images, fonts etc. from html file. It will help to resolving the paths.
24. `file-loader` package added to application it help us to move all the used static file like image/videos/fonts to dist folder
25. `clean-webpack-plugin` added, since while building we have multiple main.js file with some hash values. So this plugin will delete all the contents of the `dist` folder
26. Created `src/vendor.js`, which will hold all the 3rd party libraries like `bootstrap`. So that we can test multiple entry points
27. `mini-css-extract-plugin` added so that we can have separate `.css` file when we build the application
28. `optimize-css-assets-webpack-plugin` added so that we can minify the generated `.css` files
29. Added `typescript` & `ts-loader` to have support for typescript files
30. Added `tsconfig` configuration file for typescript
31. In `webpack-prod` added `optimizer` block to optimize the output in prod environment since it is not required in `dev`
32. Added `devtool` in `webpack-dev` file as `source map`, so that we can easily debug application while developing


##### Alternative to `webpacks`
1. Parcel
2. RollUp

Welcome for contibutions & comments.

Created with love by - `<adna_coder />` Happy coding & hacking +_+
