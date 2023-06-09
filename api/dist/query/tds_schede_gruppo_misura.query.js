"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUERY = void 0;
exports.QUERY = {
    SELECT_TDS_SCHEDE_GRUPPO_MISURE: 'SELECT * FROM tds_schede_gruppo_misure',
    SELECT_TDS_SCHEDE_GRUPPO_MISURA: 'SELECT * FROM tds_schede_gruppo_misure WHERE id = ?',
    CREATE_TDS_SCHEDE_GRUPPO_MISURA: 'INSERT INTO tds_schede_gruppo_misure(id , intero_parziale, titolo_gruppo_misure, id_tds) VALUES (?, ?, ?, ?);',
    UPDATE_TDS_SCHEDE_GRUPPO_MISURA: 'UPDATE tds_schede_gruppo_misure SET id = ? , intero_parziale = ?, titolo_gruppo_misure = ?, id_tds = ? WHERE id = ?',
    DELETE_TDS_SCHEDE_GRUPPO_MISURA: 'DELETE FROM tds_schede_gruppo_misure WHERE id_tds = ?'
};
