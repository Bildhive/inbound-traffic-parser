export default function (url, referrer) {
    if (
        referrer.host && referrer.href &&
        referrer.host.indexOf('search.yahoo.com') !== -1 &&
        url.searchParams.get('utm_medium') === 'cpc'
    ) {
      const description = { type: 'ad', source: 'yahoo' };
      const query = referrer.searchParams.get('q');
      if (query) description.query = query;
      return description;
    }
    
    return false;
}