import yahoo from "src/lib/referrer-parser/matchers/ad/yahoo";

test('parses false if not google ad referrer', () => {
    const result = yahoo(new URL('https://example.com'), new URL('https://unknown-website.com'))

    expect(result).toBe(false);
});

test('parses false if not yahoo ad referrer', () => {
    const result = yahoo(new URL('https://example.com'), new URL('https://search.yahoo.com'))

    expect(result).toBe(false);
});

test('parses false if utm_medium is anything', () => {
    const result = yahoo(new URL('https://example.com?utm_medium=anything'), new URL('https://search.yahoo.com'))

    expect(result).toBe(false);
});

test('parses yahoo ad referrer', () => {
    const result = yahoo(new URL('https://example.com?utm_medium=cpc'), new URL('https://search.yahoo.com'))

    expect(result).toMatchObject({ type: 'ad', source: 'yahoo' });
});