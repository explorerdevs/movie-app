module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'prettier',
    'react-refresh',
    'jsx-a11y',
    'import',
    '@typescript-eslint',
  ],
  rules: {
    'react-refresh/only-export-components': 'warn',
    import: 0,
    'no-console': 'off',
    'import/no-named-as-default': 'off',
    // 'import/extensions': 'off',
    // 'import/no-unresolved': 'off',
    // 'import/prefer-default-export': 'off',
    // 'import/no-default-export': 'off',
    // 'import/no-extraneous-dependencies': 'warn',
    // 'import/order': [
    //   'warn',
    //   {
    //     'newlines-between': 'never',
    //     groups: [
    //       'builtin', // Built-in types are first
    //       ['external', 'internal'],
    //       ['sibling', 'parent'], // Then sibling and parent types. They can be mingled together
    //       'index', // Then the index file
    //       'object',
    //       // Then the rest: internal and external type
    //     ],
    //   },
    // ],
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['a'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        assert: 'either',
      },
    ],
    'no-unused-vars': 'off',
    'prettier/prettier': ['off', { usePrettierrc: true }],
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        typedefs: true,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts,.tsx'],
    },
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
};
