import bing from "src/lib/referrer-parser/matchers/ad/bing";

test('parses false if not bing ad referrer', () => {
    const result = bing(new URL('https://example.com'), new URL('https://unknown-website.com'))

    expect(result).toBe(false);
});

test('parses false if not bing ad referrer', () => {
    const result = bing(new URL('https://example.com'), new URL('https://bing.com'))

    expect(result).toBe(false);
});

test('parses bing ad referrer', () => {
    const result = bing(new URL('https://example.com?msclkid=adasdasds898hansdasd'), new URL('https://bing.com'))

    expect(result).toMatchObject({ type: 'ad', source: 'bing' });
});