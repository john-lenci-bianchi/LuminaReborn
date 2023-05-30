"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUERY = void 0;
exports.QUERY = {
    SELECT_TDS_SCHEDE_MATERIALI: 'SELECT * FROM tds_schede_materiali',
    SELECT_TDS_SCHEDE_MATERIALE: 'SELECT * FROM tds_schede_materiali WHERE id = ?',
    CREATE_TDS_SCHEDE_MATERIALE: 'INSERT INTO tds_schede_materiali(id_scheda, id_materiale) VALUES (?, ?);',
    UPDATE_TDS_SCHEDE_MATERIALE: 'UPDATE tds_schede_materiali SET id_scheda = ?, id_materiale = ? WHERE id = ?',
    DELETE_TDS_SCHEDE_MATERIALE: 'DELETE FROM tds_schede_materiali WHERE id = ?'
};