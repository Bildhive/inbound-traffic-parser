export default function (url, referrer) {
    if (
        !referrer.href ||
        (referrer.protocol && referrer.protocol == 'about:')
    ) {
      return { type: 'direct' };
    }
    
    return false;
}