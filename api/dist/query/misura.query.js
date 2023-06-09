"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUERY = void 0;
exports.QUERY = {
    SELECT_MISURE: 'SELECT * FROM misure',
    SELECT_MISURA: 'SELECT * FROM misure WHERE id_gruppo_misure = ?',
    CREATE_MISURA: 'INSERT INTO misure(id, direzione, tipo, valore, unita_di_misura, id_gruppo_misure) VALUES (?, ?, ?, ?, ?, ?);',
    UPDATE_MISURA: 'UPDATE misure SET id = ?, direzione = ?, tipo = ? ,valore = ?, unita_di_misura = ?, id_gruppo_misure = ? WHERE id_gruppo_misure = ?',
    DELETE_MISURA: 'DELETE FROM misure WHERE id = ?'
};
