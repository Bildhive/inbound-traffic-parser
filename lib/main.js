const referrerParser = require('./referrer-parser');

function parse(url, referrer) {
    const parsedUrl = new URL(url);
    const parsedReferrer = new URL(referrer);

    return {
        referrer: referrerParser.parse(parsedUrl, parsedReferrer),
        campaign: null,
    }
}

module.exports = {
    parse,
}