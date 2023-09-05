import google from "src/lib/referrer-parser/matchers/ad/google";

test('parses false if not google ad referrer', () => {
    const result = google(new URL('https://example.com'), new URL('https://unknown-website.com'))

    expect(result).toBe(false);
});

test('parses false if not google ad referrer', () => {
    const result = google(new URL('https://example.com'), new URL('https://google.com'))

    expect(result).toBe(false);
});

test('parses google ad referrer', () => {
    const result = google(new URL('https://example.com?gclid=adasdasds898hansdasd'), new URL('https://google.com'))

    expect(result).toMatchObject({ type: 'ad', source: 'google' });
});