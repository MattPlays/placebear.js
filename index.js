const fetch = require("node-fetch");
const fs = require("fs");
/**
 * @param {number} width - The width of the placeholder image you want to request
 * @param {number} height - The height of the placeholder image you want to request
 * @param {string} downloadPath - The location you want the placeholder image to be downloaded
 * @returns {Promise<void>} If successful this function will return void
 * @example
 * const placebear = require("placebear.js")
 * placebear(1920,1080, "path/to/file.jpg")
 */
module.exports = async(width, height, downloadPath) => {
    const url = `https://placebear.com/${width}/${height}`;
    return fetch(url, {
        "method": "GET"
    }).then((data) => {
        return data.body.pipe(fs.createWriteStream(downloadPath));
    }).catch((err) => {throw new Error(err)});
}