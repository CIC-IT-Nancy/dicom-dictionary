import globals from 'globals';
import tsEslint from 'typescript-eslint';
import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import stylistic from "@stylistic/eslint-plugin";

export default tsEslint.config({
    extends: [
        js.configs.recommended,
        importPlugin.flatConfigs.recommended,
        prettierRecommended,
        ...tsEslint.configs.recommended,
    ],
    files: ['**/*.{js,ts}'],
    languageOptions: {
        ecmaVersion: 2022,
        globals: globals.browser,
        parserOptions: {
            project: ['./tsconfig.eslint.json'],
            tsconfigRootDir: import.meta.dirname,
        },
    },
    plugins: {
        '@stylistic': stylistic,
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                trailingComma: 'all',
                tabWidth: 4,
                bracketSpacing: true,
                arrowParens: 'always',
                endOfLine: 'lf',
                semi: true,
            },
        ],
        'no-import-assign': 'error',
        'no-undef': [
            'error',
            {
                typeof: true,
            },
        ],
        'no-unexpected-multiline': 'error',
        'no-self-assign': 'error',
        'no-unreachable': 'error',
        'no-unreachable-loop': 'error',
        'no-unsafe-optional-chaining': 'error',
        'no-use-before-define': 'error',
        'no-useless-backreference': 'error',
        'valid-typeof': [
            'error',
            {
                requireStringLiterals: false,
            },
        ],
        camelcase: 'error',
        curly: 'error',
        eqeqeq: 'error',
        'no-shadow': 'error',
        'no-var': 'error',
        radix: 'error',
        semi: 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-namespace': 'error',
        'import/no-empty-named-blocks': 'error',
        'import/no-useless-path-segments': 'error',
        'import/consistent-type-specifier-style': 'error',
        'import/no-unresolved': 'off',
        'import/order': [
            'error',
            {
                groups: [
                    'index',
                    'sibling',
                    'parent',
                    'internal',
                    'external',
                    'builtin',
                    'object',
                    'type',
                ],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                'newlines-between': 'always',
            },
        ],
    },
});
