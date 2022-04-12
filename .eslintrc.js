module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:eslint-comments/recommended',
        'plugin:import/recommended',
        'plugin:node/recommended',
        'prettier',
    ],
    rules: {
        'node/no-unsupported-features/es-syntax': 'off',
        'node/no-missing-import': 'off',
        'import/no-unresolved': 'off',
    },
};
