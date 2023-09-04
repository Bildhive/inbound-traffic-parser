/** @type {import('jest').Config} */
const config = {
    verbose: true,
    moduleNameMapper: {
        'src/lib/(.*)': [
            '<rootDir>/src/lib/$1',
        ],
    },
};

module.exports = config;