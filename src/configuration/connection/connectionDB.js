"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const optionConnection_1 = require("./optionConnection");
const var_database_1 = __importDefault(require("../domains/var_database"));
const pg_promise_1 = __importDefault(require("pg-promise"));
const pgp = (0, pg_promise_1.default)(optionConnection_1.opcionesPG);
const pg_1 = require("pg");
const config_1 = __importDefault(require("../domains/config"));
let dbPort = process.env.DB_PORT;
// ** Client for use the variables.env
const client = new pg_1.Client({
    user: config_1.default.dbUser,
    password: config_1.default.dbPassword,
    host: config_1.default.dbHost,
    database: config_1.default.dbName,
    port: dbPort !== undefined ? parseInt(dbPort, 10) : undefined
});
const pool = pgp(client);
// ! The important let for use password
let variablesString = JSON.stringify(var_database_1.default);
pool
    .connect()
    .then((conn) => {
    console.log("Your enter to database: ", client.database);
    conn.done();
})
    .catch((meErr) => {
    console.log(meErr);
});
exports.default = pool;
