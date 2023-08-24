import { parse } from "../../src/lib/referrer-parser";

test('parse is defined', () => {
    expect(parse).toBeDefined();    
})

test('parses unknown referrer', () => {
    const result = parse(
        new URL('https://example.com'),
        new URL('https://not-known-site.com'),
    );

    expect(result).toBeInstanceOf(Object);    
    expect(result.type).toBe('unknown');
})

test('parses unknown referrer', () => {
    const result = parse(
        new URL('https://example.com'),
        new URL('https://not-known-site.com'),
    );

    expect(result).toBeInstanceOf(Object);    
    expect(result.type).toBe('unknown');
})

test('parses referrer from the matchers', () => {
    const result = parse(
        new URL('https://example.com'),
        new URL('https://google.com/search?q=example'),
    );

    expect(result).toMatchObject({ type: 'search', engine: 'google', query: 'example' });    
})