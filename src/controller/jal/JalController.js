"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListDao_1 = __importDefault(require("../../dao/ListDao"));
const sql_details_especific_jal_1 = require("../../repository/jal/sql_details_especific_jal");
class JalController extends ListDao_1.default {
    getMeListJalDepartamento(req, res) {
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        JalController.getInfoEspecific(sql_details_especific_jal_1.SQL_DETAILS_ESPECIFICS_JAL.JAL_DEPARTAMENTO, parametro, res);
    }
    getMeListJalDepartamentoMunicipio(req, res) {
        const id_municipality = req.params.idMunicipality;
        const parametro = [id_municipality];
        JalController.getInfoEspecific(sql_details_especific_jal_1.SQL_DETAILS_ESPECIFICS_JAL.JAL_DEPARTAMENTO_MUNICICPIO, parametro, res);
    }
    getMeListJalBogotaLocation(req, res) {
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        JalController.getInfoEspecific(sql_details_especific_jal_1.SQL_DETAILS_ESPECIFICS_JAL.JAL_LOCATIONS_BOGOTA, parametro, res);
    }
    getMeListJalLocation(req, res) {
        const id_location = req.params.idMunicipality;
        const parametro = [id_location];
        JalController.getInfoEspecific(sql_details_especific_jal_1.SQL_DETAILS_ESPECIFICS_JAL.JAL_LOCATION, parametro, res);
    }
}
const jalController = new JalController();
exports.default = jalController;
