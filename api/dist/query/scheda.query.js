"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUERY = void 0;
exports.QUERY = {
    SELECT_SCHEDE: 'SELECT * FROM schede',
    SELECT_SCHEDA: 'SELECT * FROM schede WHERE id = ?',
    SELECT_AUTORI: 'SELECT * FROM autori JOIN tds_schede_autori ON autori.id = tds_schede_autori.id_autore  WHERE tds_schede_autori.id_scheda = ?',
    SELECT_CRONOLOGIE: 'SELECT * FROM cronologie JOIN tds_schede_cronologie ON cronologie.id = tds_schede_cronologie.id_cronologia WHERE tds_schede_cronologie.id_scheda = ?',
    SELECT_MATERIALI: 'SELECT * FROM materiali JOIN tds_schede_materiali ON materiali.id = tds_schede_materiali.id_materiale WHERE tds_schede_materiali.id_scheda =  ?',
    SELECT_TECNICHE: 'SELECT * FROM tecniche JOIN tds_schede_tecniche ON tecniche.id = tds_schede_tecniche.id_tecnica WHERE tds_schede_tecniche.id_scheda =  ?',
    SELECT_UBICAZIONI: 'SELECT * FROM ubicazioni JOIN tds_schede_ubicazioni ON ubicazioni.id = tds_schede_ubicazioni.id_ubicazione WHERE tds_schede_ubicazioni.id_scheda =  ?',
    SELECT_INVENTARI: 'SELECT * FROM inventari JOIN tds_schede_inventari ON inventari.id = tds_schede_inventari.id_inventario WHERE tds_schede_inventari.id_scheda =  ?',
    SELECT_PROVENIENZE: 'SELECT * FROM provenienze JOIN tds_schede_provenienze ON provenienze.id = tds_schede_provenienze.id_provenienza WHERE tds_schede_provenienze.id_scheda =  ?',
    SELECT_MOSTRE: 'SELECT * FROM mostre JOIN tds_schede_mostre ON mostre.id = tds_schede_mostre.id_mostra WHERE tds_schede_mostre.id_scheda =  ?',
    SELECT_BIBLIOGRAFIE: 'SELECT * FROM bibliografie  JOIN tds_schede_bibliografie ON bibliografie.id = tds_schede_bibliografie.id_bibliografia WHERE tds_schede_bibliografie.id_scheda =  ?',
    SELECT_ALTREBIBLIOGRAFIE: 'SELECT * FROM altreBibliografie  JOIN tds_schede_altreBibliografie ON altreBibliografie.id = tds_schede_altreBibliografie.id_altreBibliografie WHERE tds_schede_altreBibliografie.id_scheda =  ?',
    SELECT_IMMAGINI: 'SELECT * FROM immagini JOIN tds_schede_immagini ON immagini.id = tds_schede_immagini.id_immagine WHERE tds_schede_immagini.id_scheda =  ?',
    SELECT_DOCUMENTAZIONIFOTOGRAFICHE: 'SELECT * FROM documentazioniFotografiche JOIN tds_schede_documentazioniFotografiche ON documentazioniFotografiche.id = tds_schede_documentazioniFotografiche.id_documentazioneFotografica WHERE tds_schede_documentazioniFotografiche.id_scheda =  ?',
    SELECT_MISURE: 'SELECT m.*, tsgm.* FROM misure AS m JOIN tds_schede_gruppo_misure AS tsgm ON m.id_gruppo_misure = tsgm.id JOIN tds_schede_misure AS tsm ON tsgm.id = tsm.id_gruppo_misure WHERE tsm.id_scheda = ?',
    CREATE_SCHEDA: 'INSERT INTO schede(id, titolo_di_servizio, titolo_opera, corpo_scheda, iscrizioni, descrizione_sintetica, storia_espositiva, classificazione) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
    UPDATE_SCHEDA: 'UPDATE schede SET id = ?, titolo_di_servizio = ?, titolo_opera = ?,  corpo_scheda = ?, iscrizioni = ?, descrizione_sintetica = ?, storia_espositiva = ?, classificazione = ? WHERE id = ?',
    DELETE_SCHEDA: 'DELETE FROM schede WHERE id = ?'
};
