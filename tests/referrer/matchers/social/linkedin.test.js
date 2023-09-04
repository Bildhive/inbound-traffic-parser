import linkedin from "src/lib/referrer-parser/matchers/social/linkedin";

test('parses false if not linkedin referrer', () => {
    const result = linkedin(new URL('https://example.com'), new URL('https://unknown-website.com'))

    expect(result).toBe(false);
});

test('parses linkedin referrer', () => {
    const result = linkedin(new URL('https://example.com'), new URL('https://linkedin.com'))

    expect(result).toMatchObject({ type: 'social', source: 'linkedin' });
});