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
    LIST_DEPARTMENT_GOBERNACION: "SELECT dp.name_department, SUM(vg.number_votes) AS VOTOS \
    FROM department dp \
    LEFT JOIN votes_gobernacion_19 vg ON dp.id_department = vg.id_department \
    WHERE dp.id_department = $1 \
    GROUP BY dp.id_department \
    LIMIT 1",
    LIST_DEPARTMENT_ASAMBLEA: "SELECT dp.name_department, SUM(vas.number_votes) AS VOTOS \
    FROM department dp \
    LEFT JOIN votes_asamblea_19 vas ON dp.id_department = vas.id_department \
    WHERE dp.id_department = $1 \
    GROUP BY dp.id_department \
    LIMIT 1",
    LIST_DEPARTMENT_ALCALDIA: "SELECT dp.name_department, SUM(vac.number_votes) AS VOTOS \
    FROM department dp \
    LEFT JOIN votes_alcaldia_19 vac ON dp.id_department = vac.id_department \
    WHERE dp.id_department = $1 \
    GROUP BY dp.id_department \
    LIMIT 1",
    LIST_DEPARTMENT_JAL: "SELECT dp.name_department, SUM(vj.number_votes) AS VOTOS \
    FROM department dp \
    LEFT JOIN votes_jal_19 vj ON dp.id_department = vj.id_department \
    WHERE dp.id_department = $1 \
    GROUP BY dp.id_department \
    LIMIT 1",
    LIST_DEPARTMENT_CONCEJO: "SELECT dp.name_department, SUM(vc.number_votes) AS VOTOS \
    FROM department dp \
    LEFT JOIN votes_concejo_19 vc ON dp.id_department = vc.id_department \
    WHERE dp.id_department = $1 \
    GROUP BY dp.id_department \
    LIMIT 1",
};
