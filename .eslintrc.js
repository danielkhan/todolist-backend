module.exports = {
  "extends": "airbnb-base",
  "rules": {
      "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
      "no-underscore-dangle": ["error", { "allow": ["_id"] }],
      "no-param-reassign": ["error", { "props": false }],
    }
};