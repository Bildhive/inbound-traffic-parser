export default function (url, referrer) {
    if (
        referrer.host && referrer.href &&
        (referrer.host.indexOf('twitter.com') !== -1 || referrer.host.indexOf('t.co') !== -1)
    ) {
      const description = { type: 'social', source: 'twitter' };
      const query = referrer.searchParams.get('q');
      if (query) description.query = query;
      return description;
    }
    
    return false;
}