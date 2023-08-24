import { parse as referrerParser } from './referrer-parser'

function parse(url, referrer){
    const parsedUrl = new URL(url);
    const parsedReferrer = new URL(referrer);

    return {
        referrer: referrerParser(parsedUrl, parsedReferrer),
        campaign: null,
    }
}

export {
    parse
}