"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_DETAILS_ESPECIFICS_CONCEJO = void 0;
exports.SQL_DETAILS_ESPECIFICS_CONCEJO = {
    CONCEJO_DEPARTAMENTO: "SELECT SUM(vc.number_votes) AS VOTOS, \
    jsonb_object(array['id_municipality',mu.id_municipality,'name_municipality',mu.name_municipality]::TEXT[]) AS municipality \
            FROM votes_concejo_19 vc \
            INNER JOIN municipality mu ON mu.id_municipality = vc.id_municipality \
            WHERE mu.id_department = $1 \
            GROUP BY mu.name_municipality, mu.id_municipality \
            ORDER BY mu.name_municipality ASC",
    CONCEJO_DEPARTAMENTO_MUNICICPIO: "SELECT vc.candidate_name, vc.description_politicparty, SUM(vc.number_votes) AS VOTOS \
    FROM votes_concejo_19 vc \
    WHERE vc.id_municipality = $1 AND vc.id_municipality IN (SELECT id_municipality FROM municipality) \
    GROUP BY vc.candidate_name, vc.description_politicparty \
    ORDER BY VOTOS DESC",
    CONCEJO_LOCALIDAD: "SELECT vc.candidate_name, vc.description_politicparty, SUM(vc.number_votes) AS VOTOS, \
	jsonb_object(array['id_municipality',lo.id_location,'name_municipality',lo.name_location]::TEXT[]) AS municipality \
    FROM votes_concejo_19 vc \
    INNER JOIN location lo ON lo.id_location = vc.id_location \
	WHERE vc.id_location = $1 AND vc.id_location IN (SELECT id_location FROM location ) \
    GROUP BY vc.candidate_name, vc.description_politicparty ,lo.id_location, lo.name_location \
    ORDER BY VOTOS DESC"
};
