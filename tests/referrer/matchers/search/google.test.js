import google from "src/lib/referrer-parser/matchers/search/google";

test('parses false if not google referrer', () => {
    const result = google(new URL('https://example.com'), new URL('https://unknown-website.com'))

    expect(result).toBe(false);
});

test('parses google referrer', () => {
    const result = google(new URL('https://example.com'), new URL('https://google.com'))

    expect(result).toMatchObject({ type: 'search', engine: 'google' });
});