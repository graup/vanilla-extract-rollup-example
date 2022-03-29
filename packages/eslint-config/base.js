module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'unused-imports',
    'simple-import-sort',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'comma-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'no-trailing-spaces': 'error',
    quotes: ['error', 'single'],
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'react/jsx-boolean-value': 'error',
    'import/no-useless-path-segments': 'error',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': false,
      },
    ],
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        ignoredNodes: [
          'TSTypeAliasDeclaration',
          'TSTypeReference *',
          'TSUnionType',
          'TemplateLiteral',
          'TemplateLiteral *',
          'TSTypeParameterInstantiation',
        ],
        SwitchCase: 1,
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-vars-ts': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'unused-imports/no-unused-imports-ts': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          ['^\\u0000'],
          ['^react', '^reakit'],
          ['^@?\\w'],
          ['^'],
          ['^\\.'],
        ],
      },
    ],
    'simple-import-sort/exports': 'warn',
  },
};
