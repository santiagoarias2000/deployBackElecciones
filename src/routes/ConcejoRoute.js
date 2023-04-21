"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ListConcejoController_1 = __importDefault(require("../controller/concejo/ListConcejoController"));
const ConcejoController_1 = __importDefault(require("../controller/concejo/ConcejoController"));
class ConcejoRoute {
    constructor() {
        this.routesApiConcejo = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiConcejo.get("", ListConcejoController_1.default.getMeListConcejoDepartamento);
        this.routesApiConcejo.get("/departamento/:idDepartment", ConcejoController_1.default.getMeListConcejoDepartamento);
        this.routesApiConcejo.get("/municipio/:idMunicipality", ConcejoController_1.default.getMeListConcejoDepartamentoMunicipio);
    }
}
const concejoRoute = new ConcejoRoute();
exports.default = concejoRoute.routesApiConcejo;
