export default {
    "vue/no-deprecated-slot-attribute": "error", //	Disallow deprecated slot attributes in templates (use v-slot instead).
    "vue/no-deprecated-slot-scope-attribute": "error", // Disallow deprecated slot-scope attributes (use v-slot instead).
    "vue/no-mutating-props": "error", // Prevent modifying props directly (use state or computed properties instead).
    "vue/no-v-for-template-key": "error", // Disallow key on <template> inside v-for (use it on the direct child element).
    "vue/no-v-model-argument": "off", // Forbid this only for Vue2 compatibility: v-model:aaa="foo".
    "vue/require-prop-types": "error", // Require specifying type definitions for props.
    "vue/require-render-return": "error", // Enforce returning a value in the render function.
    "vue/attribute-hyphenation": "error", // Enforce kebab-case for HTML attributes (e.g., custom-prop).
    "vue/component-definition-name-casing": "error", // Enforce PascalCase for component names.
    "vue/html-closing-bracket-newline": "error", //	Enforce newlines before/after the closing brackets of HTML elements.
    "vue/html-closing-bracket-spacing": "error", // Enforce spacing around closing brackets of HTML elements.
    "vue/html-end-tags": "error", // Enforce writing explicit closing tags for components (no self-closing).
    'vue/html-indent': ['error', 4, { baseIndent: 0 }], // Enforce 4 spaces of indent in vue files, but prevent the first level indent.
    "vue/html-quotes": ['error', 'double'], // Enforce double quotes for HTML attribute values (class="example").
    "vue/no-multi-spaces": "error", // Disallow multiple spaces in template expressions and attributes.
    "vue/no-spaces-around-equal-signs-in-attribute": "error", // Disallow spaces around = in attributes (class = "example" ❌).
    "vue/prop-name-casing": ["error", "camelCase"], // Enforce camelCase for prop names.
    "vue/require-default-prop": "error", // Require default values for all optional props.
    "vue/v-bind-style": ["error", "shorthand", { "sameNameShorthand": "always" }], // ✅: <div :foo />, ❌: <div :foo="foo" />, ✅: <div :foo="bar" />
    "vue/v-on-style": ["error", "shorthand"], // Enforce shorthand (@) or long-form (v-on:) syntax consistently.
    "vue/attributes-order": ["error"], // Enforce a specific order for attributes like v-if, v-bind, etc.
    "vue/component-tags-order": ["error", { "order": [ [ "script", "template" ], "style" ]}], // Enforce order <script>, <template>, <style> in single-file components (SFCs).
    "vue/no-lone-template": "error", // Disallow <template> tags with a single root element (use direct HTML instead).
    "vue/order-in-components": "error", // Enforce a consistent order for component options (e.g., props, data, methods).
    "vue/this-in-template": "error", // Disallow using this. in templates ({{ this.name }} ❌, {{ name }} ✅).
    "vue/no-multiple-template-root": "off", // This works fine in vue3 so why not use it if necessary.
    "vue/require-explicit-emits": "error", // Require events to be declared.
    "vue/no-setup-props-destructure": "error", // Disallow destructuring props in the setup function for reactivity.
}