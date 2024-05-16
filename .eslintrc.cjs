module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["eslint-comments"],
  rules: {
    "eslint-comments/require-description": "error",
    "import/prefer-default-export": "off",
    "no-console": [
      "warn",
      {
        allow: ["error", "info", "table", "warn"],
      },
    ],
    "no-param-reassign": "warn",
  },
};
// the rules object is used to set the rules for the linter. the rules are set to warn the user of the console, no-param-reassign,  import, etc.
// airbnb
