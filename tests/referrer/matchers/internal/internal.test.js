import internal from "src/lib/referrer-parser/matchers/internal/internal";

test('parses false if not internal referrer', () => {
    const result = internal(new URL('https://example.com'), new URL('https://unknown-website.com'))

    expect(result).toBe(false);
});

test('parses internal referrer', () => {
    const result = internal(new URL('https://example.com'), new URL('https://example.com/any-other-page'))

    expect(result).toMatchObject({ type: 'internal' });
});