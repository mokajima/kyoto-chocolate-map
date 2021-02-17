module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  // workaround for CI
  ignorePatterns: ['dbseed.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'jest',
    'jsx-a11y',
    'prefer-arrow',
    'react',
    'react-hooks'
  ],
  root: true,
  rules: {
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      },
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        'vars': 'all',
        'args': 'after-used',
        'argsIgnorePattern': '_',
        'ignoreRestSiblings': false,
        'varsIgnorePattern': '_'
      }
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never'
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '.storybook/**',
          'stories/**',
          '**/*/*.story.*',
          '**/*/*.stories.*',
          '**/__specs__/**',
          '**/*/*.spec.*',
          '**/__tests__/**',
          '**/*/*.test.*',
          'src/setupTests.*'
        ]
      }
    ],
    'import/prefer-default-export': 'off',
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  }
}
