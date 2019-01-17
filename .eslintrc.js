module.exports = {
    "extends": [
        "airbnb",
        "prettier"
    ],
    "parser": "babel-eslint",
    "plugins": ["jest"],
    "env": {
        "browser": true,
        "jest/globals": true
    },
    "rules": {
        "indent": ["error", 2],
        "semi": [2, "never"],
        "arrow-parens": [2, "as-needed"],
        "comma-dangle": ["error", {
            "arrays": "only-multiline",
            "objects": "only-multiline",
            "imports": "never",
            "exports": "never",
            "functions": "ignore"
        }]
    }
}
