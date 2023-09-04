export default function (url, referrer) {
    if (
        referrer.host && referrer.href &&
        referrer.host.indexOf('linkedin.com') !== -1
    ) {
      const description = { type: 'social', source: 'linkedin' };
      const query = referrer.searchParams.get('q');
      if (query) description.query = query;
      return description;
    }
    
    return false;
}