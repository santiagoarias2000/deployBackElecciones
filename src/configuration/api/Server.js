"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const SenadoRoute_1 = __importDefault(require("../../routes/SenadoRoute"));
const PresidenciaRoute_1 = __importDefault(require("../../routes/PresidenciaRoute"));
const CamaraRoute_1 = __importDefault(require("../../routes/CamaraRoute"));
const MunicipioRoute_1 = __importDefault(require("../../routes/MunicipioRoute"));
const DepartamentoRoute_1 = __importDefault(require("../../routes/DepartamentoRoute"));
const GobernacionRoute_1 = __importDefault(require("../../routes/GobernacionRoute"));
const AsambleaRoute_1 = __importDefault(require("../../routes/AsambleaRoute"));
const AlcaldiaRoute_1 = __importDefault(require("../../routes/AlcaldiaRoute"));
const ConcejoRoute_1 = __importDefault(require("../../routes/ConcejoRoute"));
const JalRoute_1 = __importDefault(require("../../routes/JalRoute"));
const UserRoute_1 = __importDefault(require("../../routes/UserRoute"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.startSetting();
        this.activeRoute();
    }
    startSetting() {
        this.app.set("PORT", 3123);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "1000mb" }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    activeRoute() {
        this.app.use('/api/public/camara', CamaraRoute_1.default);
        this.app.use('/api/public/municipio', MunicipioRoute_1.default);
        this.app.use('/api/public/departamento', DepartamentoRoute_1.default);
        this.app.use('/api/public/senado', SenadoRoute_1.default);
        this.app.use('/api/public/presidencia', PresidenciaRoute_1.default);
        this.app.use('/api/private/gobernacion', GobernacionRoute_1.default);
        this.app.use('/api/private/asamblea', AsambleaRoute_1.default);
        this.app.use('/api/private/alcaldia', AlcaldiaRoute_1.default);
        this.app.use('/api/private/concejo', ConcejoRoute_1.default);
        this.app.use('/api/private/jal', JalRoute_1.default);
        this.app.use('/api/public/user', UserRoute_1.default);
    }
    start() {
        this.app.listen(this.app.get("PORT"), () => {
            console.log("It works", this.app.get("PORT"));
        });
    }
}
exports.default = Server;
