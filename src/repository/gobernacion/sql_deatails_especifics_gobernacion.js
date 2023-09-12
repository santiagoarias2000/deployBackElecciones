"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_DETAILS_ESPECIFICS_GOBERNACION = void 0;
exports.SQL_DETAILS_ESPECIFICS_GOBERNACION = {
    GOBERNACION_DEPARTAMENTO: "SELECT vg.candidate_name, vg.description_politicparty, SUM(vg.number_votes) AS VOTOS, tg1.VOTOS AS VOTOSSSS, \
    jsonb_object(array['idDepartment',dp.id_department,'name_department',dp.name_department]::TEXT[]) AS department \
FROM votes_gobernacion_19 vg \
INNER JOIN department dp ON dp.id_department = vg.id_department \
INNER JOIN ( \
    SELECT vtg.description_politicparty, dep.id_department, SUM(vtg.number_votes) AS VOTOS \
    FROM votes_gobernacion_19 vtg \
    INNER JOIN department dep ON dep.id_department = vtg.id_department \
    GROUP BY vtg.description_politicparty, dep.id_department \
    ORDER BY VOTOS DESC \
) tg1 ON tg1.description_politicparty = vg.description_politicparty AND tg1.id_department = dp.id_department \
WHERE  dp.id_department=$1 \
GROUP BY vg.candidate_name, vg.description_politicparty, dp.id_department, tg1.VOTOS \
ORDER BY tg1.VOTOS DESC, VOTOS DESC",
    GOBERNACION_DEPARTAMENTO_MUNICIPIO: "SELECT vg.candidate_name,vg.description_politicparty,sum(vg.number_votes) as VOTOS, tg3.votos, tg4.votos AS votos_muicipio, \
    jsonb_object(array['idDepartment',tg3.id_department,'name_department',tg3.name_department]::TEXT[]) AS department, \
    jsonb_object(array['idMunicipality',tg4.id_municipality,'name_municipality',tg4.name_municipality]::TEXT[]) AS municipality \
    FROM tg3 \
    INNER JOIN tg4 ON tg3.candidate_name=tg4.candidate_name AND tg3.name_department = tg4.name_department \
    INNER JOIN votes_gobernacion_19 vg ON vg.candidate_name = tg3.candidate_name \
    INNER JOIN ( \
            SELECT vg.description_politicparty,vg.code_role,dep.id_department ,SUM(vg.number_votes) AS VOTOS \
            FROM votes_gobernacion_19 vg \
            INNER JOIN department dep ON dep.id_department = vg.id_department \
            GROUP BY vg.description_politicparty, vg.code_role,dep.id_department \
            ORDER BY VOTOS DESC \
        ) tg1 ON tg1.description_politicparty = vg.description_politicparty AND tg1.id_department = tg3.id_department \
    WHERE tg3.id_department=$1 AND tg4.id_municipality= $2 \
    GROUP BY vg.candidate_name,vg.description_politicparty,tg3.id_department,tg3.name_department,tg4.id_municipality,tg4.name_municipality, tg3.votos, tg4.votos, tg1.VOTOS \
    ORDER BY tg1.VOTOS DESC,tg4.votos DESC",
};
