export default function (url, referrer) {
    if (
        referrer.host && referrer.href &&
        referrer.host.indexOf('pinterest.com') !== -1
    ) {
      const description = { type: 'social', source: 'pinterest' };
      const query = referrer.searchParams.get('q');
      if (query) description.query = query;
      return description;
    }
    
    return false;
}