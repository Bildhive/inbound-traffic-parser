import yandex from "src/lib/referrer-parser/matchers/search/yandex";

test('parses false if not yandex referrer', () => {
    const result = yandex(new URL('https://example.com'), new URL('https://unknown-website.com'))

    expect(result).toBe(false);
});

test('parses yandex referrer', () => {
    const result = yandex(new URL('https://example.com'), new URL('https://yandex.com'))

    expect(result).toMatchObject({ type: 'search', engine: 'yandex' });
});