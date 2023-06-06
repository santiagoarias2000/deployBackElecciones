"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListDao_1 = __importDefault(require("../../dao/ListDao"));
const sql_toList_Asamble_1 = require("../../repository/asamblea/sql_toList_Asamble");
class ListAsambleaController extends ListDao_1.default {
    getMeListAsambleaDepartamento(req, res) {
        ListAsambleaController.getInfo(sql_toList_Asamble_1.SQL_LIST_ASAMBLEA.LIST_ASAMBLEA_DEPARTAMENTO, [], res);
    }
}
const listAsambleaController = new ListAsambleaController();
exports.default = listAsambleaController;
