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