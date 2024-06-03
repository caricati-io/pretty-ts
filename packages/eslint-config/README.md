# Caricati: TS Eslint Config

## install

```
npm install --save-dev @caricati/ts-eslint-config
```

## Usage

Create the `.eslintrc` file on the root path of your project, and add the `@caricati/ts-eslint-config` extension:

```
{
  "extends": "@caricati/ts-eslint-config",
  "settings": {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".ts"],
      },
    },
  },
  "parserOptions": {
    "sourceType": "module",
    "project": "./tsconfig.json",
  },
}
```
