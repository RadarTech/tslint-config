# ⚙️ tslint-config

[![code style: airbnb](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat)](https://github.com/airbnb/javascript)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)

> A [TSLint config](https://palantir.github.io/tslint/usage/configuration/) with sensible rules for 0x protocol, Airbnb, Prettier, and more.

## 🔗 Installation

Install via `npm`:

```sh
npm install @radarrelay/tslint-config --save-dev
```

Ensure you also have the required `peerDependencies` installed:

```sh
npm install tslint@^5.11.0 typescript@^3.0.3 prettier@^1.14.0 --save-dev
```

## 🛠️ Usage

By default, only `airbnb` and `prettier` configurations are included. Each configuration is available as a separate file so you can mix in just what you need!

In `tslint.json`:

```javascript
{
  "extends": "@radarrelay/tslint-config"
}
```

or:

```javascript
{
  "extends": [
    "@radarrelay/tslint-config/0x"
    "@radarrelay/tslint-config/airbnb",
    "@radarrelay/tslint-config/prettier", // NOTE: Prettier should always be the last in the list.
  ]
}
```

## ⚡ Configuration

### Rules

- [`tslint`](https://palantir.github.io/tslint/rules/)
- [`tslint-config-airbnb`](https://github.com/progre/tslint-config-airbnb)
  - [`tslint-eslint-rules`](https://github.com/buzinas/tslint-eslint-rules)
  - [`tslint-consistent-codestyle`](https://github.com/ajafff/tslint-consistent-codestyle)
  - [`tslint-microsoft-contrib`](https://github.com/Microsoft/tslint-microsoft-contrib)
- [`@0xproject/tslint-config`](https://github.com/0xProject/0x-monorepo/tree/development/packages/tslint-config)
- [`tslint-config-prettier`](https://github.com/alexjoverm/tslint-config-prettier)

### Plugins

- [`tslint-plugin-prettier`](https://github.com/ikatyang/tslint-plugin-prettier)

## 🗜️ Versioning

```
+————— Major version is synchronized with TSLint's major version.
| +——— Minor version has BREAKING CHANGES or features.
| | +— Patch version has non-breaking changes.
| | |
x.x.x
```
