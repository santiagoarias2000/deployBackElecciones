"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_details_especifics_alacaldia_1 = require("./../../repository/alcaldia/sql_details_especifics_alacaldia");
const ListDao_1 = __importDefault(require("../../dao/ListDao"));
class AlcaldiaController extends ListDao_1.default {
    getMeListAlcaldiaDepartamento(req, res) {
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        AlcaldiaController.getInfoEspecific(sql_details_especifics_alacaldia_1.SQL_DETAILS_ESPECIFICS_ALCALDIA.ALCALDIA_DEPARTAMENTO, parametro, res);
    }
    getMeListAlcaldiaMunicipio(req, res) {
        const id_municipality = req.params.idMunicipality;
        const parametro = [id_municipality];
        AlcaldiaController.getInfoEspecific(sql_details_especifics_alacaldia_1.SQL_DETAILS_ESPECIFICS_ALCALDIA.ALCALDIA_MUNICIPIO, parametro, res);
    }
}
const alcaldiaController = new AlcaldiaController();
exports.default = alcaldiaController;
