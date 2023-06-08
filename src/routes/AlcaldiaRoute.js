"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ListAlcaldiaController_1 = __importDefault(require("../controller/alcaldia/ListAlcaldiaController"));
const AlcaldiaController_1 = __importDefault(require("../controller/alcaldia/AlcaldiaController"));
class AlcaldiaRoute {
    constructor() {
        this.routesApiAlcaldia = (0, express_1.Router)();
        this.setting();
    }
    setting() {
        this.routesApiAlcaldia.get("", ListAlcaldiaController_1.default.getMeListAlcalidaDepartamento);
        this.routesApiAlcaldia.get("/departamento/:idDepartment", AlcaldiaController_1.default.getMeListAlcaldiaDepartamento);
        this.routesApiAlcaldia.get("/municipio/:idMunicipality", AlcaldiaController_1.default.getMeListAlcaldiaMunicipio);
        this.routesApiAlcaldia.get("/localidad/:idMunicipality", AlcaldiaController_1.default.getMeListAlcaldiaLocalidad);
    }
}
const alcaldiaRoute = new AlcaldiaRoute();
exports.default = alcaldiaRoute.routesApiAlcaldia;
