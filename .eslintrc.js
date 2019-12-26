module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
    plugins: [
        '@typescript-eslint',
        'react-hooks',
        'jest',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier/@typescript-eslint',
        'plugin:jest/recommended',
        'plugin:react/recommended',
    ],
    settings: {
        react: {
          "version": "detect",
        }
    },
    rules: {
        'eqeqeq': ["error", "always"],
        'react-hooks/rules-of-hooks': "error",
        'react-hooks/exhaustive-deps': "warn"
    }
};
