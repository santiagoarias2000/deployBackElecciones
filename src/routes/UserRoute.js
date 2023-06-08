"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controller/users/UserController"));
class UserRoute {
    constructor() {
        this.routesAccessApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.routesAccessApi.post("/login", UserController_1.default.findTheAccessUser);
    }
}
const userRoute = new UserRoute();
exports.default = userRoute.routesAccessApi;
