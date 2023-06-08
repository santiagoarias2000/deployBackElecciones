"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_TO_LIST_CAMARA = void 0;
exports.SQL_TO_LIST_CAMARA = {
    LIST_CAMARA_DEPARTAMENTO_TERRITORIAL: "SELECT * FROM CAMARA_DEPARTAMENTO_TERRITORIAL_PERMANENTE",
    //     "SELECT dp.name_department, SUM(vs.number_votes) AS votos,  \
    //     jsonb_build_object('idDepartment', dp.id_department, 'name_department', dp.name_department) AS department \
    //     FROM votes vs \
    // INNER JOIN department dp ON dp.id_department = vs.id_department \
    // WHERE vs.code_district = 1 AND vs.code_role = 2 \
    // GROUP BY dp.id_department, dp.name_department \
    // ORDER BY dp.name_department ASC",
    LIST_CAMARA_DEPARTAMENTO_INDIGENA: "SELECT * FROM CAMARA_DEPARTAMENTO_INDIGENA_PERMANENTE",
    // "SELECT dp.name_department, SUM(vs.number_votes) AS votos,  \
    // jsonb_build_object('idDepartment', dp.id_department, 'name_department', dp.name_department) AS department \
    // FROM votes vs \
    // INNER JOIN department dp ON dp.id_department = vs.id_department \
    // WHERE vs.code_district = 4 AND vs.code_role = 2 \
    // GROUP BY dp.id_department, dp.name_department \
    // ORDER BY dp.name_department ASC",
    LIST_CAMARA_DEPARTAMENTO_AFRO_DESCENDIENTE: "SELECT * FROM CAMARA_DEPARTAMENTO_AFRO_DESCENDIENTE_PERMANENTE",
    // "SELECT dp.name_department, SUM(vs.number_votes) AS votos,  \
    // jsonb_build_object('idDepartment', dp.id_department, 'name_department', dp.name_department) AS department \
    // FROM votes vs \
    // INNER JOIN department dp ON dp.id_department = vs.id_department \
    // WHERE vs.code_district = 5 AND vs.code_role = 2 \
    // GROUP BY dp.id_department, dp.name_department \
    // ORDER BY dp.name_department ASC",
};
