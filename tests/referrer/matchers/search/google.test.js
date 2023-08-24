const google = require("../../../../lib/referrer-parser/matchers/search/google");

test('parses false if not google referrer', () => {
    const result = google(new URL('https://example.com'), new URL('https://unknown-website.com'))

    expect(result).toBe(false);
});

test('parses google referrer from /search endpoint', () => {
    const result = google(new URL('https://example.com'), new URL('https://google.com/search?q=example'))

    expect(result).toMatchObject({ type: 'search', engine: 'google', query: 'example' });
});

test('parses google referrer from /url endpoint', () => {
    const result = google(new URL('https://example.com'), new URL('https://google.com/url?q=example'))

    expect(result).toMatchObject({ type: 'search', engine: 'google', query: 'example' });
});

test('parses false google referrer when directly loading', () => {
    const result = google(new URL('https://example.com'), new URL('https://google.com'))

    expect(result).toBe(false);
});