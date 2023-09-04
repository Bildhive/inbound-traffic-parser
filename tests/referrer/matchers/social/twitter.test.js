import twitter from "src/lib/referrer-parser/matchers/social/twitter";

test('parses false if not twitter referrer', () => {
    const result = twitter(new URL('https://example.com'), new URL('https://unknown-website.com'))

    expect(result).toBe(false);
});

test('parses twitter referrer', () => {
    const result = twitter(new URL('https://example.com'), new URL('https://twitter.com'))

    expect(result).toMatchObject({ type: 'social', source: 'twitter' });
});

test('parses t.co twitter referrer', () => {
    const result = twitter(new URL('https://example.com'), new URL('https://t.co'))

    expect(result).toMatchObject({ type: 'social', source: 'twitter' });
});