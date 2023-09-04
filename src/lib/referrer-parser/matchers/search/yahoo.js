import tldextract from 'tld-extract';

export default function (url, referrer) {
    if (referrer.host && referrer.host.indexOf('search.yahoo') === -1) {
        return false;
    }

    try {
        const result = tldextract(referrer.href);

        if (
            result.domain === 'yahoo.com' &&
            result.sub.indexOf('search') !== -1
        ) {
            const description = { type: 'search', engine: 'yahoo' };
            const query = referrer.searchParams.get('q');
            if (query) description.query = query;
            return description;
        }
    } catch (e) {
        return false;
    }
    
    return false;
}