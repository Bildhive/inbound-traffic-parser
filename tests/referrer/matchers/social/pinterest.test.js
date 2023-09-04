import pinterest from "src/lib/referrer-parser/matchers/social/pinterest";

test('parses false if not pinterest referrer', () => {
    const result = pinterest(new URL('https://example.com'), new URL('https://unknown-website.com'))

    expect(result).toBe(false);
});

test('parses pinterest referrer', () => {
    const result = pinterest(new URL('https://example.com'), new URL('https://pinterest.com'))

    expect(result).toMatchObject({ type: 'social', source: 'pinterest' });
});