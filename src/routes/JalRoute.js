"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ListJalController_1 = __importDefault(require("../controller/jal/ListJalController"));
const JalController_1 = __importDefault(require("../controller/jal/JalController"));
class JalRoute {
    constructor() {
        this.routesApiJal = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiJal.get("", ListJalController_1.default.getMeListCamaraTerritorial);
        this.routesApiJal.get("/departamento/:idDepartment", JalController_1.default.getMeListJalDepartamento);
        this.routesApiJal.get("/municipio/:idMunicipality", JalController_1.default.getMeListJalDepartamentoMunicipio);
        this.routesApiJal.get("/departamento/bogota/:idDepartment", JalController_1.default.getMeListJalBogotaLocation);
        this.routesApiJal.get("/localidad/:idMunicipality", JalController_1.default.getMeListJalLocation);
    }
}
const jalRoute = new JalRoute();
exports.default = jalRoute.routesApiJal;
