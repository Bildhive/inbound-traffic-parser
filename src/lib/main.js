import { parse as referrerParser } from './referrer-parser'
import { parse as campaignParser } from './campaign-parser'

function parse(url, referrer){
    const parsedUrl = new URL(url);
    const parsedReferrer = new URL(referrer);

    return {
        referrer: referrerParser(parsedUrl, parsedReferrer),
        campaign: campaignParser(parsedUrl, parsedReferrer),
    }
}

export {
    parse
}