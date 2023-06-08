"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ListAsambleaController_1 = __importDefault(require("../controller/asamblea/ListAsambleaController"));
const AsambleaController_1 = __importDefault(require("../controller/asamblea/AsambleaController"));
class AsambleaRoute {
    constructor() {
        this.routesApiAsamblea = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiAsamblea.get("", ListAsambleaController_1.default.getMeListAsambleaDepartamento);
        this.routesApiAsamblea.get("/departamento/:idDepartment", AsambleaController_1.default.getMeListAsambleaDepartamento);
        this.routesApiAsamblea.get("/departamento/:idDepartment/municipio/:idMunicipality", AsambleaController_1.default.getMeListAsambleaDepartamentoMunicipio);
    }
}
const asambleaRoute = new AsambleaRoute();
exports.default = asambleaRoute.routesApiAsamblea;
