"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_LIST_JAL = void 0;
exports.SQL_LIST_JAL = {
    LIST_JAL_DEPARTAMENTO: "SELECT SUM(vj.number_votes) as votos, \
    jsonb_build_object('idDepartment', dp.id_department, 'name_department', dp.name_department) AS department \
    FROM votes_jal_19 vj \
    INNER JOIN department dp ON dp.id_department = vj.id_department \
    GROUP BY dp.id_department, dp.name_department \
    ORDER BY dp.name_department ASC"
};
