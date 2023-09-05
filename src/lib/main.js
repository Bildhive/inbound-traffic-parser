import { parse as referrerParser } from './referrer-parser'
import { parse as campaignParser } from './campaign-parser'

function parse(url, referrer){
    const parsedUrl = new URL(url);
    let parsedReferrer;

    try {
        parsedReferrer = new URL(referrer)
    } catch (e) {
        parsedReferrer = {};
    }

    return {
        referrer: referrerParser(parsedUrl, parsedReferrer),
        campaign: campaignParser(parsedUrl, parsedReferrer),
    }
}

export {
    parse
}

window.ITP = {
    parse
}