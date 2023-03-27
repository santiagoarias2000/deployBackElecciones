"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_DEPARTMENT = void 0;
exports.SQL_DEPARTMENT = {
    LIST_DEPARTMENT_TERRITORIAL_VOTES_ETC: "SELECT dp.id_department, dp.name_department, dp.name_department2, SUM(vs.number_votes) AS VOTOS \
    FROM department dp \
    LEFT JOIN votes vs ON dp.id_department = vs.id_department AND vs.code_district = 1 AND vs.code_role = 2 \
    WHERE dp.id_department = $1 \
    GROUP BY dp.id_department \
    LIMIT 1",
    LIST_DEPARTMENT_INDIGENA_VOTES_ETC: "SELECT dp.id_department, dp.name_department, dp.name_department2, SUM(vs.number_votes) AS VOTOS \
    FROM department dp \
    LEFT JOIN votes vs ON dp.id_department = vs.id_department AND vs.code_district = 4 AND vs.code_role = 2 \
    WHERE dp.id_department = $1 \
    GROUP BY dp.id_department \
    LIMIT 1",
    LIST_DEPARTMENT_AFRODESCENDIENTE_VOTES_ETC: "SELECT dp.id_department, dp.name_department, dp.name_department2, SUM(vs.number_votes) AS VOTOS \
    FROM department dp \
    LEFT JOIN votes vs ON dp.id_department = vs.id_department AND vs.code_district = 5 AND vs.code_role = 2 \
    WHERE dp.id_department = $1 \
    GROUP BY dp.id_department \
    LIMIT 1",
    LIST_DEPARTMENT_NACIONAL_SENADO_VOTES_ETC: "SELECT dp.id_department, dp.name_department, dp.name_department2, SUM(vs.number_votes) AS VOTOS \
    FROM department dp \
    LEFT JOIN votes vs ON dp.id_department = vs.id_department AND vs.code_district = 0 AND vs.code_role = 1 \
    WHERE dp.id_department = $1 \
    GROUP BY dp.id_department \
    LIMIT 1",
    LIST_DEPARTMENT_INDIGENA_SENADO_VOTES_ETC: "SELECT dp.id_department, dp.name_department, dp.name_department2, SUM(vs.number_votes) AS VOTOS \
    FROM department dp \
    LEFT JOIN votes vs ON dp.id_department = vs.id_department AND vs.code_district = 4 AND vs.code_role = 1 \
    WHERE dp.id_department = $1 \
    GROUP BY dp.id_department \
    LIMIT 1",
};
