"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_LIST_ASAMBLEA = void 0;
exports.SQL_LIST_ASAMBLEA = {
    LIST_ASAMBLEA_DEPARTAMENTO: "SELECT * FROM ASAMBLEA_NACIONAL"
    //"SELECT SUM(va.number_votes) AS votos, \
    // jsonb_build_object('idDepartment', dp.id_department, 'name_department', dp.name_department) AS department \
    // FROM votes_asamblea_19 va \
    // INNER JOIN department dp ON dp.id_department = va.id_department \
    // GROUP BY dp.id_department, dp.name_department \
    // ORDER BY dp.name_department ASC"
};
