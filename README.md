# Installation

`npm install`

# Build

`npm run build:lib`
`npm run build:app`

This project uses `build-elements.js` script that will merge generated `.js` files into one:

```js
const fs = require('fs-extra');
const concat = require('concat');

const appName = "components-core-app";

const buildElement = async () => {
    const files = [
        `./dist/${appName}/main.js`,
        `./dist/${appName}/polyfills.js`,
        `./dist/${appName}/runtime.js`
    ];
    await fs.ensureDir('elements');
    await concat(files, 'elements/my-form.js')
}

buildElement().then(() => {
    console.log("File created")
});
```

This will ensure that `elements` directory exists, and put generated script there.

# Run

Open `index.html` file in a browser.