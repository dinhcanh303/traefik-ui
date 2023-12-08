"use strict";

const { getDataFileYAMLByType } = require("../utils/utils");

class HttpService {
    static getAllRouter = async () => {
        const routers = getDataFileYAMLByType();
        return routers.middlewares;
    }
    static getAllMiddleware = async () => {
        const routers = getDataFileYAMLByType();
        return routers.middlewares;
    }
}
module.exports = HttpService;