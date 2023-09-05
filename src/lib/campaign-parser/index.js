const campaignKeyMap = {
    'utm_campaign': 'campaign',
    'utm_source': 'source',
    'utm_term': 'term',
    'utm_medium': 'medium',
    'utm_count': 'content'
};

function parse(url, referrer) {
    const campaign = {};

    for (const [queryKey, ourKey] of Object.entries(campaignKeyMap)) {
        if (url.searchParams.has(queryKey)) {
            campaign[ourKey] = url.searchParams.get(queryKey);
        }
    }

    return Object.keys(campaign).length > 0 ? campaign : null;
}

export {
    parse
}