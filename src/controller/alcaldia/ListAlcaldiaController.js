"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListDao_1 = __importDefault(require("../../dao/ListDao"));
const sql_toList_Alcaldia_1 = require("../../repository/alcaldia/sql_toList_Alcaldia");
class ListAlcaldiaController extends ListDao_1.default {
    getMeListAlcalidaDepartamento(req, res) {
        ListAlcaldiaController.getInfo(sql_toList_Alcaldia_1.SQL_LIST_ALCALDIA.LIST_ALCALDIA_DEPARTAMENTO, [], res);
    }
}
const listAlcaldiaController = new ListAlcaldiaController();
exports.default = listAlcaldiaController;
