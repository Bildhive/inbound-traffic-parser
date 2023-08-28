export default function (url, referrer) {
    if (
        referrer.host && referrer.href &&
        referrer.host.indexOf('duckduckgo') !== -1
    ) {
      const description = { type: 'search', engine: 'duckduckgo' };
      const query = referrer.searchParams.get('q');
      if (query) description.query = query;
      return description;
    }
    
    return false;
}