"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_MUNICIPIO = void 0;
exports.SQL_MUNICIPIO = {
    LIST_MUNICIPIO: "SELECT mu.id_municipality,mu.id_department,mu.name_municipality, mu.name_municipality \
    FROM municipality mu \
    INNER JOIN department dp ON dp.id_department = mu.id_department \
    WHERE dp.id_department=$1 \
    ORDER BY mu.name_municipality ASC",
    ONE_MUNICIPALITY: "SELECT  mu.id_municipality,(SELECT dp.name_department FROM department dp WHERE dp.id_department = mu.id_department) AS department,mu.name_municipality, mu.name_municipality\
    FROM municipality mu \
    WHERE mu.id_municipality=$1 \
    ORDER BY mu.name_municipality ASC",
    ONE_LOCATION: "SELECT lo.id_location,(SELECT dp.name_department FROM department dp WHERE dp.id_department = 11) AS department,lo.name_location AS name_municipality \
  FROM location lo \
  WHERE lo.id_location=$1\
  LIMIT 1",
    LOCALIDAD: "SELECT lo.id_location as id_municipality, lo.name_location as name_municipality \
  FROM location lo \
  WHERE  lo.id_location <>21"
};
