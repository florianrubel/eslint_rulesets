export default {
    "react/display-name": "off", // Disable enforcing explicit displayName for React components.
    "react/forbid-prop-types": ["error", { "forbid": ["any"] }], // Disallow using any in propTypes.
    "react/no-array-index-key": "warn", // Warn when using array indices as keys (can cause rendering issues).
    "react/no-danger": "warn", // Warn against using dangerouslySetInnerHTML for security reasons.
    "react/prop-types": "error", // Enforces prop types validation.
    "react/self-closing-comp": "error", // Require self-closing tags for components without children.
    "react/react-in-jsx-scope": "error", // Ensures React is in scope when using JSX (only needed in older React versions).
    "react/destructuring-assignment": ["error", "always"], // Enforce destructuring of props.
    "react/jsx-filename-extension": ["error", { "extensions": [".jsx", ".tsx"] }], // Restrict JSX syntax to .jsx and .tsx files.
    "react/jsx-indent": ["error", 4], // Enforces consistent JSX indentation (4 spaces).
    "react/jsx-no-duplicate-props": ["error", { "ignoreCase": true }], // Disallow duplicate props in JSX.
    "react/jsx-max-props-per-line": ["error", { "maximum": 1 }], // Restrict the number of props on a single line.
    "react-hooks/rules-of-hooks": "error", // Ensures proper usage of React hooks.
    "react-hooks/exhaustive-deps": "warn",
    "jsx-a11y/anchor-is-valid": "error", // Enforce the href attribute on <a> tags.
    "jsx-a11y/alt-text": "error", // Require alt attributes for <img> tags.
    "jsx-a11y/no-static-element-interactions": "warn" // Ensure elements with handlers have proper accessibility roles.
}