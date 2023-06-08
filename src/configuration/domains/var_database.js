"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "variables.env" });
exports.default = {
    user: process.env.USERDATABASE,
    host: process.env.HOSTDATABASE,
    database: process.env.DATABASENAME,
    port: process.env.PORTDATABASE,
};
// export default {
//   user: String(process.env.USERDATABASE),
//   host: String(process.env.HOSTDATABASE),
//   database: String(process.env.DATABASENAME),
//   password: process.env.PASSWORDATABASE,
//   port: String(process.env.PORTDATABASE),
// };
