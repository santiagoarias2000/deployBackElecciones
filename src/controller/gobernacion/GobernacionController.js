"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListDao_1 = __importDefault(require("../../dao/ListDao"));
const sql_deatails_especifics_gobernacion_1 = require("../../repository/gobernacion/sql_deatails_especifics_gobernacion");
class GobernacionController extends ListDao_1.default {
    getMeListGobernacionDepartamento(req, res) {
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        GobernacionController.getInfoEspecific(sql_deatails_especifics_gobernacion_1.SQL_DETAILS_ESPECIFICS_GOBERNACION.GOBERNACION_DEPARTAMENTO, parametro, res);
    }
    getMeListGobernacionDepartamentoMunicipio(req, res) {
        const id_department = req.params.idDepartment;
        const id_municipality = req.params.idMunicipality;
        const parametro = [id_department, id_municipality];
        GobernacionController.getInfoEspecific(sql_deatails_especifics_gobernacion_1.SQL_DETAILS_ESPECIFICS_GOBERNACION.GOBERNACION_DEPARTAMENTO_MUNICIPIO, parametro, res);
    }
}
const gobernacionController = new GobernacionController();
exports.default = gobernacionController;
