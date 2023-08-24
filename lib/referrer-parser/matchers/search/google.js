module.exports = function (url, referrer) {
    if (
        referrer.host && referrer.href &&
        referrer.host.indexOf('google') !== -1
    ) {
      const description = { type: 'search', engine: 'google' };
      const query = referrer.searchParams.get('q');
      if (query) description.query = query;
      return description;
    }
    
    return false;
}