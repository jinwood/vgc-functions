module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/dist/**/*", // Ignore built files.
  ],
  plugins: [
    "prettier",
    "@typescript-eslint",
    "import",
  ],
  rules: {
    quotes: ["error", "double"],
    "prettier/prettier": ["error"]
  },
};
