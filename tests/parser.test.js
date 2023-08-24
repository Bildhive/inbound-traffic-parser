import { parse } from '../src/lib/main';

test('parse is defined', () => {
    expect(parse).toBeDefined();
})

test('it returns referrer and campaign ', () => {
    const result = parse('https://example.com', 'https://not-known-website.com');

    expect(result).toMatchObject({
        referrer: expect.any(Object),
        campaign: expect.any(Object)
    });
})

test('it returns parsed referrer ', () => {
    const result = parse('https://example.com', 'https://google.com/search?q=example');

    expect(result).toMatchObject({
        referrer: expect.objectContaining({
            type: 'search',
            engine: 'google'
        }),
        campaign: expect.any(Object)
    });
})