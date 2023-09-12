"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_LIST_GOBERNACION = void 0;
exports.SQL_LIST_GOBERNACION = {
    LIST_GOBERNACION_DEPARTAMENTO: "SELECT SUM(vg.number_votes) AS votos, \
    jsonb_build_object('idDepartment', dp.id_department, 'name_department', dp.name_department) AS department \
    FROM votes_gobernacion_19 vg \
    INNER JOIN department dp ON dp.id_department = vg.id_department \
    GROUP BY dp.id_department, dp.name_department \
    ORDER BY dp.name_department ASC"
};
