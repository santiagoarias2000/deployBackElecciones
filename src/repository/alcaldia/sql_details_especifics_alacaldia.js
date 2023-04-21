"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_DETAILS_ESPECIFICS_ALCALDIA = void 0;
exports.SQL_DETAILS_ESPECIFICS_ALCALDIA = {
    ALCALDIA_DEPARTAMENTO: "SELECT SUM(vac.number_votes) AS VOTOS, \
    jsonb_object(array['id_municipality',mu.id_municipality,'name_municipality',mu.name_municipality]::TEXT[]) AS municipality \
        FROM votes_alcaldia_19 vac \
        INNER JOIN municipality mu ON mu.id_municipality = vac.id_municipality \
        WHERE mu.id_department = $1 \
        GROUP BY mu.name_municipality, mu.id_municipality \
        ORDER BY mu.name_municipality ASC",
    ALCALDIA_MUNICIPIO: "SELECT val.candidate_name,val.description_politicparty, SUM(val.number_votes) AS VOTOS \
    FROM votes_alcaldia_19 val \
    INNER JOIN municipality mu ON mu.id_municipality = val.id_municipality \
    WHERE val.id_municipality=$1 \
    GROUP by val.candidate_name, val.description_politicparty \
    ORDER BY votos DESC"
};
