import yahoo from "../../../../src/lib/referrer-parser/matchers/search/yahoo";

test('parses false if not yahoo referrer', () => {
    const result = yahoo(new URL('https://example.com'), new URL('https://unknown-website.com'))

    expect(result).toBe(false);
});

test('parses yahoo referrer', () => {
    const result = yahoo(new URL('https://example.com'), new URL('https://search.yahoo.com'))

    expect(result).toMatchObject({ type: 'search', engine: 'yahoo' });
});