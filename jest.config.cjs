/** @type {import('jest').Config} */
const config = {
    moduleNameMapper: {
        'src/lib/(.*)': [
            '<rootDir>/src/lib/$1',
        ],
    },
};

module.exports = config;