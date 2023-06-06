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
    ALCALDIA_MUNICIPIO: "SELECT val.candidate_name, val.description_politicparty, SUM(val.number_votes) AS VOTOS \
    FROM votes_alcaldia_19 val \
    WHERE val.id_municipality = $1 AND val.id_municipality IN (SELECT id_municipality FROM municipality) \
    GROUP BY val.candidate_name, val.description_politicparty \
    ORDER BY VOTOS DESC",
    ALCALDIA_LOCALIDAD: "SELECT val.candidate_name, val.description_politicparty, SUM(val.number_votes) AS VOTOS, \
	jsonb_object(array['id_municipality',lo.id_location,'name_municipality',lo.name_location]::TEXT[]) AS municipality \
    FROM votes_alcaldia_19 val \
    INNER JOIN location lo ON lo.id_location = val.id_location \
	WHERE val.id_location = $1 AND val.id_location IN (SELECT id_location FROM location ) \
    GROUP BY val.candidate_name, val.description_politicparty ,lo.id_location, lo.name_location \
    ORDER BY VOTOS DESC"
};
