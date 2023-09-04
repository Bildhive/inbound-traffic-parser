export default function (url, referrer) {
    if (
        referrer.host && referrer.href &&
        referrer.host.indexOf('search.aol.com') !== -1
    ) {
      const description = { type: 'search', source: 'aol' };
      const query = referrer.searchParams.get('q');
      if (query) description.query = query;
      return description;
    }
    
    return false;
}