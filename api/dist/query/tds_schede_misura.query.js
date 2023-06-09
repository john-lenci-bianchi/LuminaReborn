"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUERY = void 0;
exports.QUERY = {
    SELECT_TDS_SCHEDE_MISURE: 'SELECT * FROM tds_schede_misure',
    SELECT_TDS_SCHEDE_MISURA: 'SELECT * FROM tds_schede_misure WHERE id_scheda = ?',
    CREATE_TDS_SCHEDE_MISURA: 'INSERT INTO tds_schede_misure(id_scheda ,id_gruppo_misure) VALUES (?, ?);',
    UPDATE_TDS_SCHEDE_MISURA: 'UPDATE tds_schede_misure SET id_scheda = ? , id_gruppo_misure = ?, WHERE id_scheda = ?',
    DELETE_TDS_SCHEDE_MISURA: 'DELETE FROM tds_schede_misure WHERE id_scheda = ?'
};
