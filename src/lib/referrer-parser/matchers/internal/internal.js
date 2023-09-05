export default function (url, referrer) {
    if (
        url.host &&
        referrer.host &&
        url.host === referrer.host
    ) {
      return { type: 'internal' };
    }
    
    return false;
}