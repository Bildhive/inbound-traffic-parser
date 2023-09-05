export default function (url, referrer) {
    if (
        referrer.host && referrer.href &&
        referrer.host.indexOf('google.com') !== -1 &&
        url.searchParams.get('gclid')
    ) {
      const description = { type: 'ad', source: 'google' };
      const query = referrer.searchParams.get('q');
      if (query) description.query = query;
      return description;
    }
    
    return false;
}