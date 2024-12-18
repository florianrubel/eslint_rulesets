export default {
    "@typescript-eslint/no-shadow": "error", // Prevent the same variable / function names in nested scopes.
    '@typescript-eslint/no-explicit-any': 'error', // Forbid to use any
    "@typescript-eslint/consistent-type-assertions": "error", // Enforce consistent type assertions (as over <Type>).
    "@typescript-eslint/prefer-optional-chain": "error", // Enforce the use of optional chaining (?.) where applicable.
    '@typescript-eslint/no-unused-vars': ['error',{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' },], // Forbid unused variables but allow them if they start with _.
    'import/extensions': ['error', 'ignorePackages', {'ts': 'never','tsx': 'never'}], // don't enforce file extensions on ts and tsx files.
}