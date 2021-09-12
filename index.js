const axios = require("axios").default;
const fs = require("fs");
/**
 * @param {number} width - The width of the placeholder image you want to request
 * @param {number} height - The height of the placeholder image you want to request
 * @param {string} downloadPath - The location you want the placeholder image to be downloaded
 * @returns {Promise<fs.WriteStream>}
 * @example
 * const placebear = require("placebear.js")
 * placebear(1920,1080, "path/to/file.jpg")
 */
module.exports = async(width, height, downloadPath) => {
    const url = `https://placebear.com/${width}/${height}`;
    return axios({
        method: "GET",
        url: url,
        responseType: "stream"
    }).then(({data}) => {
        return data.pipe(fs.createWriteStream(downloadPath));
    }).catch((err) => {throw new Error(err)});
}