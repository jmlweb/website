/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["plugin:astro/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: "module",
    ecmaVersion: "latest",
  },
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      plugins: ["simple-import-sort"],
      rules: {
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error"
      },
    },
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint", "simple-import-sort"],
      parserOptions: {
        project: "tsconfig.json",
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:prettier/recommended",
      ],
      rules: {
        "prettier/prettier": [
          "error",
          {
            semi: true,
            singleQuote: true,
            tabWidth: 2,
            trailingComma: "all",
            useTabs: false,
          },
        ],
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error"
      },
    },
  ],
};
