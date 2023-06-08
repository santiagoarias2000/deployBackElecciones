"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListDao_1 = __importDefault(require("../../dao/ListDao"));
const sql_details_especifics_asamblea_1 = require("../../repository/asamblea/sql_details_especifics_asamblea");
class AsambleaController extends ListDao_1.default {
    getMeListAsambleaDepartamento(req, res) {
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        AsambleaController.getInfoEspecific(sql_details_especifics_asamblea_1.SQL_DETAILS_ESPECIFICS_ASAMBLEA.ASAMBLEA_DEPARTAMENTO, parametro, res);
    }
    getMeListAsambleaDepartamentoMunicipio(req, res) {
        const id_department = req.params.idDepartment;
        const id_municipality = req.params.idMunicipality;
        const parametro = [id_department, id_municipality];
        AsambleaController.getInfoEspecific(sql_details_especifics_asamblea_1.SQL_DETAILS_ESPECIFICS_ASAMBLEA.ASAMBLEA_DEPARTAMENTO_MUNICIPIO, parametro, res);
    }
}
const asambleaController = new AsambleaController();
exports.default = asambleaController;
