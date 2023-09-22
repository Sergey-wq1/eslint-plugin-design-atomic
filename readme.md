eslint-plugin-design-atomic
===================

prohibits imports to the lower levels from the upper, as well as cross-imports
# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

    npm install eslint

    npm i eslint-plugin-design-atomic

# Configuration

Add `plugins` section

```json
{
  "plugins": [
    "design-atomic"
  ]
}
```

Finally, enable all of the rules that you would like to use.

```json
{
  "rules": {
    "design-atomic/atomic-design": "error"
  }
}
```
