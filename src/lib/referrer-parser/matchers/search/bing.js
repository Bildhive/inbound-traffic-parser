export default function (url, referrer) {
    if (
        referrer.host && referrer.href &&
        referrer.host.indexOf('bing') !== -1
    ) {
      const description = { type: 'search', engine: 'bing' };
      const query = referrer.searchParams.get('q');
      if (query) description.query = query;
      return description;
    }
    
    return false;
}