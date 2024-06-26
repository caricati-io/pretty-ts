module.exports = {
  extends: [
    "airbnb",
    "airbnb-typescript/base",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    semi: ["error", "never"],
  },
};
