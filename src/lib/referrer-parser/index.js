// import matchers from './matchers';

import matchers from "src/lib/referrer-parser/matchers";



function parse(url, referrer) {
    for (const matcher of matchers) {
        const parsed = matcher(url, referrer);

        if (parsed) return parsed;
    }

    return {
        type: 'unknown'
    }
}

export {
    parse
}