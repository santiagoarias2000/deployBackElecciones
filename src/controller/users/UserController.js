"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDao_1 = __importDefault(require("../../dao/userDAO/UserDao"));
const sql_access_login_1 = require("../../repository/users/sql_access_login");
class UserController extends UserDao_1.default {
    findTheAccessUser(req, res) {
        const emailUser = req.body.emailUser;
        const password = req.body.passwordUser;
        const parameter = [emailUser, password];
        UserController.findIdUserAccess(sql_access_login_1.SQL_ACCESS_LOGIN.VALIDATELOGIN, parameter, res);
    }
}
const userController = new UserController();
exports.default = userController;
