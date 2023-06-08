"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_toList_Jal_1 = require("../../repository/jal/sql_toList_Jal");
const ListDao_1 = __importDefault(require("../../dao/ListDao"));
class ListJalController extends ListDao_1.default {
    getMeListCamaraTerritorial(req, res) {
        ListJalController.getInfo(sql_toList_Jal_1.SQL_LIST_JAL.LIST_JAL_DEPARTAMENTO, [], res);
    }
}
const listJalController = new ListJalController();
exports.default = listJalController;
