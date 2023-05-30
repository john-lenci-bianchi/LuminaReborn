export const QUERY = {
    SELECT_BIBLIOGRAFIE: 'SELECT * FROM bibliografie',
    SELECT_BIBLIOGRAFIA: 'SELECT * FROM bibliografie WHERE id = ?',
    CREATE_BIBLIOGRAFIA: 'INSERT INTO bibliografie(id, riferimento_bibliografico, altro) VALUES (?, ?, ?)',
    UPDATE_BIBLIOGRAFIA: 'UPDATE bibliografie SET id = ?, riferimento_bibliografico = ?, altro=? WHERE id = ?',
    DELETE_BIBLIOGRAFIA: 'DELETE FROM bibliografie WHERE id = ?',
};