module.exports = {
    presets: [
        "@babel/preset-typescript",
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    "env": {
        "test": {
            "plugins": ["@babel/plugin-transform-runtime"]
        }
    }
}