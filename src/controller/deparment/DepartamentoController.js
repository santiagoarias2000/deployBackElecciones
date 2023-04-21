"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sql_list_departamento_1 = require("./../../repository/departamento/sql_list_departamento");
const ListDao_1 = __importDefault(require("../../dao/ListDao"));
class DepartamentoController extends ListDao_1.default {
    getMeListTerritorialDepartment(req, res) {
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        DepartamentoController.getInfo(sql_list_departamento_1.SQL_DEPARTMENT.LIST_DEPARTMENT_TERRITORIAL_VOTES_ETC, parametro, res);
    }
    getMeListIndigenaCamaraDepartment(req, res) {
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        DepartamentoController.getInfo(sql_list_departamento_1.SQL_DEPARTMENT.LIST_DEPARTMENT_INDIGENA_VOTES_ETC, parametro, res);
    }
    getMeListAfrodescendienteDepartment(req, res) {
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        DepartamentoController.getInfo(sql_list_departamento_1.SQL_DEPARTMENT.LIST_DEPARTMENT_AFRODESCENDIENTE_VOTES_ETC, parametro, res);
    }
    getMeListNacionalDepartment(req, res) {
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        DepartamentoController.getInfo(sql_list_departamento_1.SQL_DEPARTMENT.LIST_DEPARTMENT_NACIONAL_SENADO_VOTES_ETC, parametro, res);
    }
    getMeListIndigenaSenadoDepartment(req, res) {
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        DepartamentoController.getInfo(sql_list_departamento_1.SQL_DEPARTMENT.LIST_DEPARTMENT_INDIGENA_SENADO_VOTES_ETC, parametro, res);
    }
    getMeListGobernacionDepartment(req, res) {
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        DepartamentoController.getInfo(sql_list_departamento_1.SQL_DEPARTMENT.LIST_DEPARTMENT_GOBERNACION, parametro, res);
    }
    getMeListAsambleaDepartment(req, res) {
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        DepartamentoController.getInfo(sql_list_departamento_1.SQL_DEPARTMENT.LIST_DEPARTMENT_ASAMBLEA, parametro, res);
    }
    getMeListConcejoDepartment(req, res) {
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        DepartamentoController.getInfo(sql_list_departamento_1.SQL_DEPARTMENT.LIST_DEPARTMENT_CONCEJO, parametro, res);
    }
    getMeListJalDepartment(req, res) {
        const id_department = req.params.idDepartment;
        const parametro = [id_department];
        DepartamentoController.getInfo(sql_list_departamento_1.SQL_DEPARTMENT.LIST_DEPARTMENT_JAL, parametro, res);
    }
}
const departamentoController = new DepartamentoController();
exports.default = departamentoController;
