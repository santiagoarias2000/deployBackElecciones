"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_DETAILS_ESPECIFICS_JAL = void 0;
exports.SQL_DETAILS_ESPECIFICS_JAL = {
    JAL_DEPARTAMENTO: "SELECT municipality.name_municipality, sum(votes_jal_19.number_votes) as votos , \
    jsonb_object(array['id_municipality',municipality.id_municipality,'name_municipality',municipality.name_municipality, 'id_department', municipality.id_department]::TEXT[]) AS municipality \
    FROM votes_jal_19 \
    INNER JOIN municipality on municipality.id_municipality = votes_jal_19.id_municipality \
    WHERE municipality.id_department = $1 \
    GROUP BY municipality.id_municipality,municipality.name_municipality,municipality.id_department\
    ORDER BY municipality.name_municipality ASC",
    JAL_DEPARTAMENTO_MUNICICPIO: "SELECT vjal.candidate_name,vjal.description_politicparty, SUM(vjal.number_votes) AS VOTOS, \
    jsonb_object(array['id_municipality',mu.id_municipality,'name_municipality',mu.name_municipality]::TEXT[]) AS municipality \
    FROM votes_jal_19 vjal \
    INNER JOIN municipality mu ON mu.id_municipality = vjal.id_municipality \
    WHERE vjal.id_municipality= $1 \
    GROUP by vjal.description_politicparty, vjal.candidate_name, mu.id_municipality, mu.name_municipality \
    ORDER BY vjal.description_politicparty,votos DESC"
};
