import bing from "src/lib/referrer-parser/matchers/search/bing";

test('parses false if not bing referrer', () => {
    const result = bing(new URL('https://example.com'), new URL('https://unknown-website.com'))

    expect(result).toBe(false);
});

test('parses bing referrer', () => {
    const result = bing(new URL('https://example.com'), new URL('https://bing.com'))

    expect(result).toMatchObject({ type: 'search', engine: 'bing' });
});