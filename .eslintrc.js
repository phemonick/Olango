
module.exports = { 
    "extends": "airbnb-base" ,
    "plugins": [
        "react",
        "react-native"
      ],
    "ecmaFeatures": {
    "jsx": true
    },
    "env": {
        "react-native/react-native": true
      },
      "rules": {
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        "react-native/no-inline-styles": 2,
        "react-native/no-color-literals": 2,
      }
}