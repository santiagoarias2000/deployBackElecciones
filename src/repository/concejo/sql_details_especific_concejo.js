"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_DETAILS_ESPECIFICS_CONCEJO = void 0;
exports.SQL_DETAILS_ESPECIFICS_CONCEJO = {
    CONCEJO_DEPARTAMENTO: "SELECT municipality.name_municipality, sum(votes_concejo_19.number_votes) AS VOTOS, \
    jsonb_object(array['id_municipality',municipality.id_municipality,'name_municipality',municipality.name_municipality, 'id_department', municipality.id_department]::TEXT[]) AS municipality \
    FROM votes_concejo_19 \
    INNER JOIN municipality on municipality.id_municipality = votes_concejo_19.id_municipality \
    WHERE municipality.id_department = $1 \
    GROUP BY municipality.id_municipality,municipality.name_municipality,municipality.id_department",
    CONCEJO_DEPARTAMENTO_MUNICICPIO: "SELECT vcon.candidate_name,vcon.description_politicparty, SUM(vcon.number_votes) AS VOTOS,\
    jsonb_object(array['id_municipality',mu.id_municipality,'name_municipality',mu.name_municipality]::TEXT[]) AS municipality \
    FROM votes_concejo_19 vcon \
    INNER JOIN municipality mu ON mu.id_municipality = vcon.id_municipality \
    WHERE vcon.id_municipality= $1 \
    GROUP by vcon.description_politicparty, vcon.candidate_name, mu.id_municipality, mu.name_municipality \
    ORDER BY vcon.description_politicparty,votos desc",
};
