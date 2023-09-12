"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListDao_1 = __importDefault(require("../../dao/ListDao"));
const sql_toList_Gobernacion_1 = require("../../repository/gobernacion/sql_toList_Gobernacion");
class ListGobernacionController extends ListDao_1.default {
    getMeListGobernacionDepartamento(req, res) {
        ListGobernacionController.getInfo(sql_toList_Gobernacion_1.SQL_LIST_GOBERNACION.LIST_GOBERNACION_DEPARTAMENTO, [], res);
    }
}
const listGobernacionController = new ListGobernacionController();
exports.default = listGobernacionController;
