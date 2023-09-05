import unknown from "src/lib/referrer-parser/matchers/unknown/unknown";

test('parses unknown referrer', () => {
    const result = unknown(new URL('https://example.com'), new URL('https://unknown-website.com'))

    expect(result).toMatchObject({ type: 'unknown' });
});