const matchers = require('./matchers');

function parse(url, referrer) {
    for (const matcher of matchers) {
        const parsed = matcher(url, referrer);

        if (parsed) return parsed;
    }

    return {
        type: 'unknown'
    }
}

module.exports = {
    parse
}