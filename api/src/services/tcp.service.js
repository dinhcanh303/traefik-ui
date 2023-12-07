"use strict";
const fs = require('fs');
const yaml = require('js-yaml');

class TcpService {
    static getAllRouter = async () => {
        const data = fs.readFileSync("dynamic-config.yml","utf8");
        const results = yaml.load(data);
        return results
    }
}
module.exports = TcpService;