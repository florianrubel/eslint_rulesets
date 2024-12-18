export default {
    'no-console': 'error', // Disallow the use of console.log (except in development).
    'no-alert': 'error', // Disallow the use of alert, confirm, and prompt.
    "no-debugger": "error", // Disallow the debugger statement.
    "no-continue": "error", // Discourage the use of continue in loops for cleaner control flow.
    'eqeqeq': 'error', // Enforce strict equality (=== and !==).
    'no-eval': 'error', // Disallow the use of eval().
    'no-param-reassign': 'error', // Prevent reassignment of function parameters.
    'max-len': ['warn', 200], // Limit the line length at 200 chars with a soft warning.
    'no-underscore-dangle': 'error', // Prevent variables and functions start with _ except they are unused.
    'no-shadow': 'error', // Prevent the same variable / function names in nested scopes.
    'consistent-return': 'error', // Require return statements to either always or never specify a value.
    'indent': ['error', 4], // Enforce 4-space indentation.
    'quotes': ['error', 'single'], // Enforce the use of single quotes ' for strings.
    'semi': ['error', 'always'], // Require semicolons.
    'arrow-parens': ['error', 'always'], // Enforce parentheses (bracelets) around single-parameter arrow functions. (a) => a
    'object-shorthand': ['error', 'always'], // Enforce the use of object shorthand.
    'prefer-const': 'error', // Prefer const over let for variables that are never reassigned.
    "array-bracket-spacing": ["error", "never"], // Disallow spaces inside array brackets ([1, 2] ✅, [ 1, 2 ] ❌).
    "block-spacing": ["error", "always"], // Require spaces inside single-line blocks (function() { return 42; } ✅).
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }], // Enforce one true brace style, allow single-line blocks.
    "camelcase": ["error", { "properties": "never" }], // Enforce camelCase variable names but allow properties to remain as-is.
    "comma-dangle": ["error", "always-multiline"], // Require trailing commas in multiline object/array literals.
    "curly": ["error", "multi-line"], // Require curly braces for multiline blocks (if (x) { doSomething(); } ✅).
    "dot-notation": ["error", { "allowKeywords": true }], // Enforce property access via dot notation unless invalid (object['default'] ❌).
    "eol-last": ["error", "always"], // Ensure a newline at the end of files.
    "func-names": ["warn", "always"], // Require named functions for easier debugging.
    'import/no-unresolved': 'error', // Disallow unresolved imports.
    'import/prefer-default-export': ['error', { target: 'single' }], // Enforce default exports over named exports if there is only one exported member.
    "import/order": ["error", { "groups": ["builtin", "external", "internal"] }], // Enforce a consistent order for imports.
    'import/extensions': ['error', 'ignorePackages', {'js': 'never','jsx': 'never'}], // don't enforce file extensions on ts and tsx files.
    "no-duplicate-imports": "error", // Prevent duplicate import statements.
    'no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ], // Forbid unused variables but allow them if they start with _.
}
