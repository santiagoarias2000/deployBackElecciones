"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListDao_1 = __importDefault(require("../../dao/ListDao"));
const sql_details_especific_concejo_1 = require("../../repository/concejo/sql_details_especific_concejo");
class ConcejoController extends ListDao_1.default {
    getMeListConcejoDepartamento(req, res) {
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        ConcejoController.getInfoEspecific(sql_details_especific_concejo_1.SQL_DETAILS_ESPECIFICS_CONCEJO.CONCEJO_DEPARTAMENTO, parametro, res);
    }
    getMeListConcejoDepartamentoMunicipio(req, res) {
        const id_municipality = req.params.idMunicipality;
        const parametro = [id_municipality];
        ConcejoController.getInfoEspecific(sql_details_especific_concejo_1.SQL_DETAILS_ESPECIFICS_CONCEJO.CONCEJO_DEPARTAMENTO_MUNICICPIO, parametro, res);
    }
}
const concejoController = new ConcejoController();
exports.default = concejoController;
