const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'airbnb-typescript',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint'
    ],
    plugins: [
        'prettier',
        'react',
        'import',
        'jsx-a11y',
        '@typescript-eslint',
    ],
    env: {
        jest: true,
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.eslint.json',
    },
    rules: {
        'jsx-no-lambda': 0,
        semi: [2, 'always'],
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/no-unused-expressions': 0,
        '@typescript-eslint/no-empty-function': 0,
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/indent': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/camelcase': 0,
        'object-shorthand': [0, 'never'],
        quotes: [2, 'single'],
        'member-ordering': 0,
        'object-literal-sort-keys': 0,
        'no-shadowed-variable': 0,
        'no-consecutive-blank-lines': 0,
        'no-string-literal': 0,
        'jsx-no-multiline-js': 0,
        'arrow-parens': 0,
        'no-implicit-dependencies': 0,
        'no-submodule-imports': 0,
        'no-case-declarations': 1,
        'jsx-alignment': 0,
        'jsx-wrap-multiline': 0,
        'prettier/prettier': ['error', prettierOptions],
        'arrow-body-style': [2, 'as-needed'],
        'class-methods-use-this': 0,
        'import/order': 0,
        'import/imports-first': 0,
        'import/newline-after-import': 0,
        'import/no-dynamic-require': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-named-as-default': 0,
        'import/no-unresolved': [2, { caseSensitive: false }], // ts already checks case sensitive imports
        'import/no-webpack-loader-syntax': 0,
        'import/prefer-default-export': 0,
        'import/no-cycle': 1,
        'no-param-reassign': 1,
        'jsx-a11y/aria-props': 2,
        'jsx-a11y/heading-has-content': 0,
        'jsx-a11y/label-has-associated-control': 2,
        'jsx-a11y/label-has-for': 0,
        'jsx-a11y/mouse-events-have-key-events': 2,
        'jsx-a11y/role-has-required-aria-props': 2,
        'jsx-a11y/role-supports-aria-props': 2,
        'max-len': ["error", { "code": 150 }],
        'newline-per-chained-call': 0,
        'no-confusing-arrow': 0,
        'no-console': 0,
        'no-use-before-define': 0,
        'no-plusplus': 0,
        'prefer-template': 2,
        'react/destructuring-assignment': 0,
        'react/jsx-closing-tag-location': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-first-prop-new-line': [2, 'multiline'],
        'react/jsx-no-target-blank': 0,
        'react/jsx-props-no-spreading': 0,
        'react/jsx-uses-vars': 2,
        'react/prop-types': 0,
        'react/require-default-props': 0,
        'react/no-redundant-should-component-update': 1,
        'react/require-extension': 0,
        'react/self-closing-comp': 0,
        'react/sort-comp': 0,
        'react/jsx-no-undef': 1,
        'react/jsx-pascal-case': 0,
        'react/jsx-no-bind' : 1,
        'react/static-property-placement': 0,
        'consistent-return': 0,
        'comma-dangle': [
            'warn',
            {
                'arrays': 'always-multiline',
                'objects': 'always-multiline',
                'exports': 'always-multiline',
                'imports': 'always-multiline',
                'functions': 'ignore'
            }
        ],
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            node: {
                moduleDirectory: ['node_modules', 'src'], // Need to set root folders
            },
            webpack: {
                config: './webpack/webpack.babel.js',
            },
            typescript: {
                alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
                directory: './tsconfig.json',
            },
        },
        'import/ignore': ['types'], // Weirdly eslint cannot resolve exports in types folder (try removing this later)
    },
};
