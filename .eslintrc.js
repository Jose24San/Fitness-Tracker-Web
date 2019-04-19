module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'arrow-parens': [ 'error', 'as-needed' ],
    'space-in-parens': [ 'error', 'always' ],
    'padded-blocks': [ 'error', 'never' ],
    'array-bracket-spacing': [ 'error', 'always' ],
    'computed-property-spacing': [ 'error', 'always' ],
    'spaced-comment': 'off',
    'no-trailing-spaces': 'off',

    // react specific rules
    'react/jsx-filename-extension': [ 1, { 'extensions': [ '.js', '.jsx' ] } ],
    'react/jsx-curly-spacing': [ 2, { 'when': 'always' } ],
    'react/jsx-one-expression-per-line': 'off',
    "react/forbid-prop-types": 'off',

    // import
    'import/no-extraneous-dependencies': 'off',
  },
};
