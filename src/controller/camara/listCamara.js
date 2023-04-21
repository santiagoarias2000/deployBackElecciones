"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_toList_Camara_1 = require("../../repository/camara/sql_toList_Camara");
const ListDao_1 = __importDefault(require("../../dao/ListDao"));
class ListControllerCamara extends ListDao_1.default {
    getMeListCamaraTerritorial(req, res) {
        ListControllerCamara.getInfo(sql_toList_Camara_1.SQL_TO_LIST_CAMARA.LIST_CAMARA_DEPARTAMENTO_TERRITORIAL, [], res);
    }
    getMeListCamaraIndigena(req, res) {
        ListControllerCamara.getInfo(sql_toList_Camara_1.SQL_TO_LIST_CAMARA.LIST_CAMARA_DEPARTAMENTO_INDIGENA, [], res);
    }
    getMeListCamaraAfroDescendiente(req, res) {
        ListControllerCamara.getInfo(sql_toList_Camara_1.SQL_TO_LIST_CAMARA.LIST_CAMARA_DEPARTAMENTO_AFRO_DESCENDIENTE, [], res);
    }
}
const listControllerCamara = new ListControllerCamara();
exports.default = listControllerCamara;
