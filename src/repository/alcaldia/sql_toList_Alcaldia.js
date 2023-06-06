"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_LIST_ALCALDIA = void 0;
exports.SQL_LIST_ALCALDIA = {
    LIST_ALCALDIA_DEPARTAMENTO: "SELECT SUM(val.number_votes) AS votos, \
    jsonb_build_object('idDepartment', dp.id_department, 'name_department', dp.name_department) AS department \
    FROM votes_alcaldia_19 val \
    INNER JOIN department dp ON dp.id_department = val.id_department \
    GROUP BY dp.id_department, dp.name_department \
    ORDER BY dp.name_department ASC"
};
