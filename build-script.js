const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files = [
        './dist/bible/runtime.ec2944dd8b20ec099bf3.js',
        './dist/bible/scripts.4759a012d7251983f123.js',
        './dist/bible/polyfills.c6871e56cb80756a5498.js',
        './dist/bible/main.009feef3f1687218163c.js'
    ]

    await fs.ensureDir('elements')

    await concat(files, 'elements/dog.js')
    console.info('Elements created successfully!')

})()