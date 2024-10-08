# dream-team-bs

Welcome to Dream Team Bootstrap !
Custom imports and styles for Dream Team project with Sass and Javascript.

## Table of contents
- [Initialize the project](#initialize-the-project)
- [Create a custom Bootstrap](#create-a-custom-bootstrap)
   - [Sass](#sass)
   - [Javascript](#javascript)
- [Commands summary](#commands-summary)

## Initialize the project
Make sure you have installed in latest version :
- Node (required)
- Git (required)
- Visual Studio Code

#### #1 Clone the repository
HTTPS
```bash
git clone https://github.com/fabienAstia/dream-team-bs.git
```

#### #2 Install dependencies
Open the project and run NPM 
```bash
npm install
```

## Create a custom Bootstrap
### Sass
Customize Bootstrap by modifying variables/mixins in `custom.scss` (location root : src/scss/custom.scss). 

Choose your Bootstrap components in `imports.scss` (location root : src/scss/custom.scss).

The project uses [Sass](https://www.npmjs.com/package/sass) (a distribution of Dart Sass) to compile and minify the CSS output. 

To compile and minify, run
```bash
npm start
```

This will update two files in the dist/ folder :
 - `dream-team-bs.css`  CSS version of all customs and imports
 - `dream-team-bs.min.css`  minified CSS version

These files can be directly linked to HTML's <head> to apply the custom Bootstrap. Please, prefer to use the **minified version**.

Now, the project is entering watching mode. Every time you make a change in `custom.scss`, the code will be compiled and minified.

*Tip : You can use the index.html file and go live (Live Server extension in Visual Studio Code) to see changes.*

### Javascript
Choose your Javascript modules in the `main.js` file (location root : src/js/main.js).

#### Option 1 : Esbuild (Popper bundled)
*If you want to bundle Popper in your minified file, follow this section.*
</br>
</br>

In this option, the project uses [Esbuild](https://www.npmjs.com/package/sass) to compile and minify the JS output. 
EsBuild bundle the JavaScript with an **older version of Bootstrap**, which includes Popper.

To compile and minify the Javascript, run
```bash
npm run build-js
```
This method will output a minified JS file (like sass section). You can link it to your header. However, note that this method works only with an older version of Bootstrap since Popper is no longer bundled with the latest version. 

#### Option 2 : Rollup (Popper CDN)
*If you want to use the last Bootstrap version, follow this section.*
</br>
</br>

In this option, the project uses [Rollup](https://www.npmjs.com/package/rollup) to compile and minify the JS output. 
Popper/Core is **include manually via CDN link**.

Make sure the following CDN is in HTML’s <head> (required placement : between `dream-team-bs.min.css.min.css` link and the future `dream-team-bs.umd.min.js` script):
```html
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
```

Example
```html
<link rel="stylesheet" href="../dist/dream-team-bs.min.css">
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script type="module" src="../dist/dream-team-bs.umd.min.js"></script>
```

Now, you can configure the input/output javascript in `rollup.config.js` as you want or use the default configuration already in place.

To bundle your imports and configuration, run :
```bash
npm run build-bs
```
As before, this will generate a minified JS file. You can link it to your HTML's <head>.

## Commands summary
Use bash
 - `npm run start` Compiles Sass into CSS and watches changes
 - `npm run build-js` Esbuild option - bundle with Popper (older Bootstrap)
 - `npm run build-bs` Rollup option - using CDN for Popper (last Bootstrap)

At any time, you can modify commands in `package.json`
