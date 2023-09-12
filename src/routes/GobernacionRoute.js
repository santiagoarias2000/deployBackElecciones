"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ListGobernacionController_1 = __importDefault(require("../controller/gobernacion/ListGobernacionController"));
const GobernacionController_1 = __importDefault(require("../controller/gobernacion/GobernacionController"));
class GobernacionRoute {
    constructor() {
        this.routesApiGobernacion = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiGobernacion.get("", ListGobernacionController_1.default.getMeListGobernacionDepartamento);
        this.routesApiGobernacion.get("/departamento/:idDepartment", GobernacionController_1.default.getMeListGobernacionDepartamento);
        this.routesApiGobernacion.get("/departamento/:idDepartment/municipio/:idMunicipality", GobernacionController_1.default.getMeListGobernacionDepartamentoMunicipio);
    }
}
const gobernacionRoute = new GobernacionRoute();
exports.default = gobernacionRoute.routesApiGobernacion;
