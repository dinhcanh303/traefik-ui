"use strict";
const fs = require('fs');
const yaml = require('js-yaml');


const getDataFileYAMLByType = (type = "http") => {
    const file = fs.readFileSync("dynamic-config.yml","utf8");
    const yamlConfig = yaml.load(file);
    if(yamlConfig[type]){
        return yamlConfig[type]
    }
    return null;
}

module.exports = {
    getDataFileYAMLByType
}
