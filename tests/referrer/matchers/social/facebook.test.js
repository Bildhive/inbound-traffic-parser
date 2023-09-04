import facebook from "src/lib/referrer-parser/matchers/social/facebook";

test('parses false if not facebook referrer', () => {
    const result = facebook(new URL('https://example.com'), new URL('https://unknown-website.com'))

    expect(result).toBe(false);
});

test('parses facebook referrer', () => {
    const result = facebook(new URL('https://example.com'), new URL('https://facebook.com'))

    expect(result).toMatchObject({ type: 'social', source: 'facebook' });
});