module.exports = {
  env: {
    "es6": true,
  },
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
      version: "detect",
    }
  },
  rules: {
    'eqeqeq': ["error", "always"],
    'eol-last': ["error", "always"],
    'react-hooks/rules-of-hooks': "error",
    'react-hooks/exhaustive-deps': "warn",
    "react/prop-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-trailing-spaces": "error",
    "keyword-spacing": ["error"],
    "key-spacing": ["error", { "afterColon": true }],
    "object-curly-spacing": ["error", "always", { arraysInObjects: true, objectsInObjects: true }],
    "space-before-function-paren": ["error", "always"],
    "no-multi-spaces": "error",
    "space-unary-ops": "error",
    "spaced-comment": ["error", "always"],
    "switch-colon-spacing": "error",
    "no-multiple-empty-lines": ["error",{"max": 1}],
    "no-tabs": ["error", { allowIndentationTabs: true }],
    "no-whitespace-before-property": "error",
    "indent": ["error", 2, {
       "SwitchCase": 1 
    }],
    "comma-dangle": ["error", "always-multiline"],
    "default-case": "error",
    "arrow-spacing": "error",
    "space-in-parens": ["error", "never"],
    "semi": ["error", "always"],

    // overwritten by "@typescript-eslint/no-unused-vars"
    "no-unused-vars": "off",

    // react-native styles are defined after components
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",

    "react-native/no-raw-text": "off",

    // we use TypeScript instead of prop-types
    "react/prop-types": "off",

    // we need a way to get around TypeScipt when there's no good solution
    "@typescript-eslint/ban-ts-ignore": "off",

    // we use void to avoid unused variable errors where there's no other way
    "no-void": "off",

    "react/jsx-closing-bracket-location": ["error", {
      "nonEmpty": "line-aligned",
      "selfClosing": "line-aligned"
    }],

     // we use void to avoid unused variable errors where there's no other way
     "no-void": "off",

     "react/jsx-closing-bracket-location": ["error", {
       "nonEmpty": "line-aligned",
       "selfClosing": "line-aligned"
     }],
 
     // React deprecation prefix
     "camelcase": ["error", {
       "allow": ["^UNSAFE_"],
     }],

     // https://google.com/#q=%40typescript-eslint%2Fexplicit-function-return-type
     "@typescript-eslint/explicit-function-return-type": "off",
     
     // 29  https://google.com/#q=%40typescript-eslint%2Fno-explicit-any
     "@typescript-eslint/no-explicit-any": "off"
  }
};