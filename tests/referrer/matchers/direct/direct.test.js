import direct from "src/lib/referrer-parser/matchers/direct/direct";

test('parses false if not direct referrer', () => {
    const result = direct(new URL('https://example.com'), new URL('https://unknown-website.com'))

    expect(result).toBe(false);
});

test('parses direct referrer', () => {
    const result = direct(new URL('https://example.com'), {})

    expect(result).toMatchObject({ type: 'direct' });
});