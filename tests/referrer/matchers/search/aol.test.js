import aol from "src/lib/referrer-parser/matchers/search/aol";

test('parses false if not aol referrer', () => {
    const result = aol(new URL('https://example.com'), new URL('https://unknown-website.com'))

    expect(result).toBe(false);
});

test('parses aol referrer', () => {
    const result = aol(new URL('https://example.com'), new URL('https://search.aol.com'))

    expect(result).toMatchObject({ type: 'search', engine: 'aol' });
});