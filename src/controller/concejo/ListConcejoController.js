"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListDao_1 = __importDefault(require("../../dao/ListDao"));
const sql_toList_Concejo_1 = require("../../repository/concejo/sql_toList_Concejo");
class ListConcejoController extends ListDao_1.default {
    getMeListConcejoDepartamento(req, res) {
        ListConcejoController.getInfo(sql_toList_Concejo_1.SQL_LIST_CONCEJO.LIST_CONCEJO_DEPARTAMENTO, [], res);
    }
}
const listConcejoController = new ListConcejoController();
exports.default = listConcejoController;
