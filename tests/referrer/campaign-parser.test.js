import { parse } from "src/lib/campaign-parser";

test('parse is defined', () => {
    expect(parse).toBeDefined();
});

test('parses campaign', () => {
    const result = parse(new URL('https://example.com?utm_campaign=Test&utm_source=desktop&utm_medium=whatsapp&utm_term=test&utm_count=Nice'))

    expect(result).toMatchObject({
        campaign: 'Test',
        source: 'desktop',
        term: 'test',
        medium: 'whatsapp',
        content: 'Nice'
    });
});

test('parses partial campaign', () => {
    const result = parse(new URL('https://example.com?utm_campaign=Test&utm_medium=whatsapp'))

    expect(result).toMatchObject({
        campaign: 'Test',
        medium: 'whatsapp',
    });
});

test('parses null if no campaign params', () => {
    const result = parse(new URL('https://example.com'))

    expect(result).toBeNull();
});