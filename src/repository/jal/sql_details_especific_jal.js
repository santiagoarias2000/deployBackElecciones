"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_DETAILS_ESPECIFICS_JAL = void 0;
exports.SQL_DETAILS_ESPECIFICS_JAL = {
    JAL_DEPARTAMENTO: "SELECT SUM(vj.number_votes) AS VOTOS, \
    jsonb_object(array['id_municipality',mu.id_municipality,'name_municipality',mu.name_municipality]::TEXT[]) AS municipality \
            FROM votes_jal_19 vj \
            INNER JOIN municipality mu ON mu.id_municipality = vj.id_municipality \
            WHERE mu.id_department = $1 \
            GROUP BY mu.name_municipality, mu.id_municipality \
            ORDER BY mu.name_municipality ASC",
    JAL_DEPARTAMENTO_MUNICICPIO: "SELECT vj.candidate_name, vj.description_politicparty, SUM(vj.number_votes) AS VOTOS \
    FROM votes_jal_19 vj \
    WHERE vj.id_municipality = $1 AND vj.id_municipality IN (SELECT id_municipality FROM municipality) \
    GROUP BY vj.candidate_name, vj.description_politicparty \
    ORDER BY VOTOS DESC",
    JAL_LOCATIONS_BOGOTA: "SELECT SUM(vj.number_votes) AS VOTOS, \
    jsonb_object(array['id_municipality',lo.id_location,'name_municipality',lo.name_location]::TEXT[]) AS municipality \
            FROM votes_jal_19 vj \
            INNER JOIN location lo ON lo.id_location = vj.id_location \
            WHERE vj.id_department = $1 \
            GROUP BY lo.id_location, lo.name_location",
    JAL_LOCATION: "SELECT vj.candidate_name, vj.description_politicparty, SUM(vj.number_votes) AS VOTOS, \
	jsonb_object(array['id_municipality',lo.id_location,'name_municipality',lo.name_location]::TEXT[]) AS municipality \
    FROM votes_jal_19 vj \
    INNER JOIN location lo ON lo.id_location = vj.id_location \
	WHERE vj.id_location = $1 AND vj.id_location IN (SELECT id_location FROM location ) \
    GROUP BY vj.candidate_name, vj.description_politicparty ,lo.id_location, lo.name_location \
    ORDER BY VOTOS DESC"
};
