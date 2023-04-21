"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_LIST_CONCEJO = void 0;
exports.SQL_LIST_CONCEJO = {
    LIST_CONCEJO_DEPARTAMENTO: "SELECT SUM(vc.number_votes) as VOTOS, \
    jsonb_build_object('idDepartment', dp.id_department, 'name_department', dp.name_department) AS department \
    FROM votes_concejo_19 vc \
    INNER JOIN department dp ON dp.id_department = vc.id_department \
    GROUP BY dp.id_department, dp.name_department \
    ORDER BY dp.name_department ASC"
};
