module.exports = {
  parser: "babel-eslint",
  "plugins": [
    "react"
  ],
  "rules": {
    "max-len": [
      1,
      120,
      2,
      { ignoreComments: true
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true
      }
    ],
    "class-methods-use-this": "off",
    "no-unused-vars": "off"
  },
  "extends": [
    "airbnb-base"
  ],
  "env": {
    "browser": true,
    "node": true,
    "jasmine": true
  },
};