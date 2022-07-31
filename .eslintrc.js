module.exports = {
    extends: ['prettier', 'plugin:prettier/recommended'],
    parser: '@babel/eslint-parser',
    plugins: ['react', 'react-hooks', 'import', 'prettier', '@emotion'],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            'babel-module': {
                cwd: __dirname,
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
        polyfills: [
            'fetch',
            'Promise',
            'Promise.all',
            'Promise.resolve',
            'Promise.reject',
            'MutationObserver',
            'IntersectionObserver',
            'Object.keys',
            'Object.values',
            'Object.entries',
            'Object.assign',
            'Array.includes',
            'Array.from',
            'Array.find',
            'Array.findIndex',
            'String.includes',
            'String.repeat',
            'String.padStart',
            'String.padEnd',
            'String.matchAll',
            'Number.isNaN',
            'Number.isInteger',
            'Number.parseInt',
            'Symbol',
            'Symbol.iterator',
            'Set',
            'Map',
            'Element.closest',
            'Element.matches',
            'window.scrollBy',
            'AbortController',
            'document.querySelector',
        ],
    },
    env: {
        browser: true,
        jest: true,
    },
    globals: {
        __DEV__: false,
    },
    rules: {
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'prettier/prettier': ['error'],
        indent: 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-empty': 'off',
        'no-new': 'off',
        'no-loop-func': 'off',
        'no-restricted-globals': 'off',
        'class-methods-use-this': 'off',
        'function-paren-newline': 'off',
        'space-before-function-paren': 'off',
        'object-curly-newline': 'off',
        'no-underscore-dangle': 'off',
        'no-self-compare': 'off',
        'arrow-parens': 'off',
        'arrow-body-style': 'off',
        'no-plusplus': 'off',
        'no-restricted-exports': 'off',
        'no-param-reassign': ['error', { props: false }],
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'max-len': [
            'error',
            120,
            4,
            {
                ignoreUrls: true,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignorePattern: '<path([sS]*?)/>',
            },
        ],
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'only-multiline',
                exports: 'only-multiline',
                functions: 'only-multiline',
            },
        ],
        'prefer-destructuring': [
            'error',
            {
                VariableDeclarator: {
                    array: false,
                    object: true,
                },
                AssignmentExpression: {
                    array: false,
                    object: false,
                },
            },
            {
                enforceForRenamedProperties: false,
            },
        ],
        'import/first': 'off',
        'import/prefer-default-export': 'off',
        'implicit-arrow-linebreak': 'off',
        'wrap-iife': ['error', 'any'],
        'react/no-danger': 'off',
        'react/require-default-props': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-wrap-multilines': [
            'error',
            {
                declaration: 'parens-new-line',
                assignment: 'parens-new-line',
                return: 'parens-new-line',
                arrow: 'parens-new-line',
                condition: 'parens-new-line',
                logical: 'parens-new-line',
                prop: 'ignore',
            },
        ],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', '.mdx'] }],
        'react/forbid-prop-types': 'off',
        'react/jsx-closing-tag-location': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/no-unused-prop-types': 'off',
        'react/static-property-placement': 'off',
        'react/destructuring-assignment': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'jsx-a11y/href-no-hash': [0],
        'jsx-a11y/accessible-emoji': 'off',
        'jsx-a11y/alt-text': 'off',
        'jsx-a11y/anchor-has-content': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/aria-activedescendant-has-tabindex': 'off',
        'jsx-a11y/aria-props': 'off',
        'jsx-a11y/aria-proptypes': 'off',
        'jsx-a11y/aria-role': 'off',
        'jsx-a11y/aria-unsupported-elements': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/heading-has-content': 'off',
        'jsx-a11y/html-has-lang': 'off',
        'jsx-a11y/iframe-has-title': 'off',
        'jsx-a11y/img-redundant-alt': 'off',
        'jsx-a11y/interactive-supports-focus': 'off',
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'jsx-a11y/media-has-caption': 'off',
        'jsx-a11y/mouse-events-have-key-events': 'off',
        'jsx-a11y/no-access-key': 'off',
        'jsx-a11y/no-autofocus': 'off',
        'jsx-a11y/no-distracting-elements': 'off',
        'jsx-a11y/no-interactive-element-to-noninteractive-role': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
        'jsx-a11y/no-noninteractive-tabindex': 'off',
        'jsx-a11y/no-onchange': 'off',
        'jsx-a11y/no-redundant-roles': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/role-has-required-aria-props': 'off',
        'jsx-a11y/role-supports-aria-props': 'off',
        'jsx-a11y/scope': 'off',
        'jsx-a11y/tabindex-no-positive': 'off',
        'react/jsx-props-no-spreading': 'off',
        camelcase: 'off',
        '@emotion/pkg-renaming': 'error',
    },
    overrides: [
        {
            files: ['assets/**/*.{ts,tsx}'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            extends: ['plugin:@typescript-eslint/recommended'],
            rules: {
                'no-useless-constructor': 'off',
                '@typescript-eslint/no-useless-constructor': 'error',
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': [
                    'error',
                    {
                        args: 'all',
                        argsIgnorePattern: '^_',
                        ignoreRestSiblings: true,
                    },
                ],
                'no-use-before-define': 'off',
                '@typescript-eslint/no-use-before-define': 'error',
                'no-shadow': 'off',
                '@typescript-eslint/no-shadow': ['error'],
                '@typescript-eslint/ban-ts-comment': 'off',
                '@typescript-eslint/no-non-null-assertion': 'off',
                '@typescript-eslint/no-empty-function': ['error', { allow: ['methods'] }],
                '@typescript-eslint/no-inferrable-types': 'warn',
            },
        },
        {
            files: ['assets/**/*', '*.test.{js,ts,tsx}'],
            rules: {
                'import/no-extraneous-dependencies': 'off',
            },
        },
    ],
};
