import duckduckgo from "src/lib/referrer-parser/matchers/search/duckduckgo";

test('parses false if not duckduckgo referrer', () => {
    const result = duckduckgo(new URL('https://example.com'), new URL('https://unknown-website.com'))

    expect(result).toBe(false);
});

test('parses duckduckgo referrer', () => {
    const result = duckduckgo(new URL('https://example.com'), new URL('https://duckduckgo.com'))

    expect(result).toMatchObject({ type: 'search', engine: 'duckduckgo' });
});