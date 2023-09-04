import baidu from "../../../../src/lib/referrer-parser/matchers/search/baidu";

test('parses false if not baidu referrer', () => {
    const result = baidu(new URL('https://example.com'), new URL('https://unknown-website.com'))

    expect(result).toBe(false);
});

test('parses baidu referrer', () => {
    const result = baidu(new URL('https://example.com'), new URL('https://baidu.com'))

    expect(result).toMatchObject({ type: 'search', engine: 'baidu' });
});