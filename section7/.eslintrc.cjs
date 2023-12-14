module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "quotes": [ "error", "single" ], // "" => ''
    "semi": [ "error", "always" ], // semicolon 사용
    "no-empty": "error", // No empty in bracket
    "indent": [ "error", 2, { "SwitchCase": 1 } ],
    "comma-dangle": [ "error", "only-multiline" ], // Ex) { a, b, }
    "object-curly-spacing": [ "error", "always" ], // Space between { },
    "no-multi-spaces": "error", // Ex) let a =  1 => let a = 1
    "no-unused-vars": "off",
    "space-before-blocks": "error", // Ex) if (a){ => if (a) {
    "no-trailing-spaces": "error", // No trailing spaces
    "no-multiple-empty-lines": "error",
    "valid-jsdoc": "off", // Prevent to make annoying for js doc
    "no-tabs": 0, // Prevent typescript Tabs error
//    "max-len": [ "error", { "code": 150, "ignorePattern": "d='([\\s\\S]*?)'" } ], // limit max length
    "array-bracket-spacing": [ "error", "always" ],
    // For React
    "react/react-in-jsx-scope": "off",
    "react/jsx-curly-spacing": [
      2,
      { "when": "always", "children": { "when": "always" } }
    ],
    "no-duplicate-imports": "error"
  },
}
