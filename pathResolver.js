// Import the necessary modules here.

const path = require('path');

exports.getAbsolutePath = (filePath) => {
    const absolutePath = path.resolve(filePath);
    return `absolutePath : ${absolutePath}`;
};
