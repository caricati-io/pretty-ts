# Pretty TS

Presets of the Eslint and Prettier

[eslint-config](packages/eslint-config/README.md)
•
[prettier-config](packages/prettier-config/README.md)

## To install
```
npm install --save-dev @caricati/ts-eslint-config @caricati/ts-prettier-config
```

## Usage

Into your eslint file, add the `@caricati/ts-eslint-config` extension. If you're using the `.eslintrc`:
```
{
  "extends": "@caricati/ts-eslint-config"
}
```

After the package installation, create the `.prettierrc` file in the root path of your project, and add the instruction:
```
"@caricati/ts-prettier-config"
```
