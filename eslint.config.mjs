import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import stylisticJs from '@stylistic/eslint-plugin-js'
import stylisticTs from '@stylistic/eslint-plugin-ts'


export default [
    {files: ["**/*.{js,mjs,cjs,ts}"]},
    {languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic,
    {
        plugins: {
          '@stylistic/js': stylisticJs,
          '@stylistic/ts': stylisticTs,
        },
        rules: {
          'no-unused-vars': 'off',
          '@typescript-eslint/no-unused-vars': 'error',
          // indent
          "@stylistic/js/indent": ["error", 4],
          "@stylistic/ts/indent": ["error", 4],
          // 行末のセミコロンをつけない
          "@stylistic/js/semi": ["error", "never"],
          "@stylistic/ts/semi": ["error", "never"],
        }
    }
]
