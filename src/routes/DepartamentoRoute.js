"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DepartamentoController_1 = __importDefault(require("../controller/deparment/DepartamentoController"));
class DepartmentRoutes {
    constructor() {
        this.routeApiDepartamento = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routeApiDepartamento.get("/territorial/:idDepartment", DepartamentoController_1.default.getMeListTerritorialDepartment);
        this.routeApiDepartamento.get("/indigenaCamara/:idDepartment", DepartamentoController_1.default.getMeListIndigenaCamaraDepartment);
        this.routeApiDepartamento.get("/afrodescendiente/:idDepartment", DepartamentoController_1.default.getMeListAfrodescendienteDepartment);
        this.routeApiDepartamento.get("/nacional/:idDepartment", DepartamentoController_1.default.getMeListNacionalDepartment);
        this.routeApiDepartamento.get("/indigenaSenado/:idDepartment", DepartamentoController_1.default.getMeListIndigenaSenadoDepartment);
        this.routeApiDepartamento.get("/gobernacion/:idDepartment", DepartamentoController_1.default.getMeListGobernacionDepartment);
        this.routeApiDepartamento.get("/asamblea/:idDepartment", DepartamentoController_1.default.getMeListAsambleaDepartment);
        this.routeApiDepartamento.get("/alcaldia/:idDepartment", DepartamentoController_1.default.getMeListAlcaldiaDepartment);
        this.routeApiDepartamento.get("/jal/:idDepartment", DepartamentoController_1.default.getMeListJalDepartment);
        this.routeApiDepartamento.get("/concejo/:idDepartment", DepartamentoController_1.default.getMeListConcejoDepartment);
    }
}
const departmentRoutes = new DepartmentRoutes();
exports.default = departmentRoutes.routeApiDepartamento;
