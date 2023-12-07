"use strict";

const { Created, SuccessResponse } = require("../core/success.response");
const HttpService = require("../services/http.service");

class HttpController {
    getAllRouter = async (req,res,next) => {
        new SuccessResponse({
            message: "Get All Router of Traefik config successfully",
            metadata: await HttpService.getAllRouter(),
        }).send(res);
    };
}
module.exports = new HttpController();