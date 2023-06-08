"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_DETAILS_ESPECIFICS_ASAMBLEA = void 0;
exports.SQL_DETAILS_ESPECIFICS_ASAMBLEA = {
    ASAMBLEA_DEPARTAMENTO: "SELECT vas.candidate_name, vas.description_politicparty, SUM(vas.number_votes) AS VOTOS, tas1.VOTOS AS VOTOSSSS, \
    jsonb_object(array['idDepartment',dp.id_department,'name_department',dp.name_department]::TEXT[]) AS department \
FROM votes_asamblea_19 vas \
INNER JOIN department dp ON dp.id_department = vas.id_department \
INNER JOIN ( \
    SELECT vtas.description_politicparty, dep.id_department, SUM(vtas.number_votes) AS VOTOS \
    FROM votes_asamblea_19 vtas \
    INNER JOIN department dep ON dep.id_department = vtas.id_department \
    GROUP BY vtas.description_politicparty, dep.id_department \
    ORDER BY VOTOS DESC \
) tas1 ON tas1.description_politicparty = vas.description_politicparty AND tas1.id_department = dp.id_department \
WHERE  dp.id_department=$1 \
GROUP BY vas.candidate_name, vas.description_politicparty, dp.id_department, tas1.VOTOS \
ORDER BY tas1.VOTOS DESC, VOTOS DESC",
    ASAMBLEA_DEPARTAMENTO_MUNICIPIO: "SELECT vas.candidate_name,vas.description_politicparty,sum(vas.number_votes) as VOTOS, tas3.votos, tas4.votos AS votos_muicipio, \
    jsonb_object(array['idDepartment',tas3.id_department,'name_department',tas3.name_department]::TEXT[]) AS department, \
    jsonb_object(array['idMunicipality',tas4.id_municipality,'name_municipality',tas4.name_municipality]::TEXT[]) AS municipality \
    FROM tas3 \
    INNER JOIN tas4 ON tas3.candidate_name=tas4.candidate_name AND tas3.name_department = tas4.name_department \
    INNER JOIN votes_asamblea_19 vas ON vas.candidate_name = tas3.candidate_name \
    INNER JOIN ( \
            SELECT vas.description_politicparty,vas.code_role,dep.id_department ,SUM(vas.number_votes) AS VOTOS \
            FROM votes_asamblea_19 vas \
            INNER JOIN department dep ON dep.id_department = vas.id_department \
            GROUP BY vas.description_politicparty, vas.code_role,dep.id_department \
            ORDER BY VOTOS DESC \
        ) tas1 ON tas1.description_politicparty = vas.description_politicparty AND tas1.id_department = tas3.id_department \
    WHERE tas3.id_department=$1 AND tas4.id_municipality= $2 \
    GROUP BY vas.candidate_name,vas.description_politicparty,tas3.id_department,tas3.name_department,tas4.id_municipality,tas4.name_municipality, tas3.votos, tas4.votos, tas1.VOTOS \
    ORDER BY tas1.VOTOS DESC,tas4.votos DESC"
};
