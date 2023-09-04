import instagram from "src/lib/referrer-parser/matchers/social/instagram";

test('parses false if not instagram referrer', () => {
    const result = instagram(new URL('https://example.com'), new URL('https://unknown-website.com'))

    expect(result).toBe(false);
});

test('parses instagram referrer', () => {
    const result = instagram(new URL('https://example.com'), new URL('https://instagram.com'))

    expect(result).toMatchObject({ type: 'social', source: 'instagram' });
});

test('parses i.instagram referrer', () => {
    const result = instagram(new URL('https://example.com'), new URL('https://i.instagram.com'))

    expect(result).toMatchObject({ type: 'social', source: 'instagram' });
});