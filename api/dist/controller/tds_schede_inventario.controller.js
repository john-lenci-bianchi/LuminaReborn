"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTds_schede_inventario = exports.updateTds_schede_inventario = exports.createTds_schede_inventario = exports.getTds_schede_inventario = exports.getTds_schede_inventari = void 0;
const mysql_config_1 = require("../config/mysql.config");
const response_1 = require("../domain/response");
const code_enum_1 = require("../enum/code.enum");
const status_enum_1 = require("../enum/status.enum");
const tds_schede_inventario_query_1 = require("../query/tds_schede_inventario.query");
const getTds_schede_inventari = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.info(`[${new Date().toLocaleString()}] Incoming ${req.method}${req.originalUrl} Request from ${req.rawHeaders[0]} ${req.rawHeaders[1]}`);
    try {
        const pool = yield (0, mysql_config_1.connection)();
        const result = yield pool.query(tds_schede_inventario_query_1.QUERY.SELECT_TDS_SCHEDE_INVENTARI);
        pool.end();
        return res.status(code_enum_1.Code.OK)
            .send(new response_1.HttpResponse(code_enum_1.Code.OK, status_enum_1.Status.OK, 'Tds_schede_inventari retrieved', result[0]));
    }
    catch (error) {
        console.error(error);
        return res.status(code_enum_1.Code.INTERNAL_SERVER_ERROR)
            .send(new response_1.HttpResponse(code_enum_1.Code.INTERNAL_SERVER_ERROR, status_enum_1.Status.INTERNAL_SERVER_ERROR, 'An error occurred'));
    }
});
exports.getTds_schede_inventari = getTds_schede_inventari;
const getTds_schede_inventario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.info(`[${new Date().toLocaleString()}] Incoming ${req.method}${req.originalUrl} Request from ${req.rawHeaders[0]} ${req.rawHeaders[1]}`);
    try {
        const pool = yield (0, mysql_config_1.connection)();
        const result = yield pool.query(tds_schede_inventario_query_1.QUERY.SELECT_TDS_SCHEDE_INVENTARIO, [req.params.tds_schede_inventarioId]);
        if ((result[0]).length > 0) {
            pool.end();
            return res.status(code_enum_1.Code.OK)
                .send(new response_1.HttpResponse(code_enum_1.Code.OK, status_enum_1.Status.OK, 'Tds_schede_inventario retrieved', result[0]));
        }
        else {
            return res.status(code_enum_1.Code.NOT_FOUND)
                .send(new response_1.HttpResponse(code_enum_1.Code.NOT_FOUND, status_enum_1.Status.NOT_FOUND, 'Tds_schede_inventario not found'));
        }
    }
    catch (error) {
        console.error(error);
        return res.status(code_enum_1.Code.INTERNAL_SERVER_ERROR)
            .send(new response_1.HttpResponse(code_enum_1.Code.INTERNAL_SERVER_ERROR, status_enum_1.Status.INTERNAL_SERVER_ERROR, 'An error occurred'));
    }
});
exports.getTds_schede_inventario = getTds_schede_inventario;
const createTds_schede_inventario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.info(`[${new Date().toLocaleString()}] Incoming ${req.method}${req.originalUrl} Request from ${req.rawHeaders[0]} ${req.rawHeaders[1]}`);
    let tds_schede_inventario = Object.assign({}, req.body);
    try {
        const pool = yield (0, mysql_config_1.connection)();
        const result = yield pool.query(tds_schede_inventario_query_1.QUERY.CREATE_TDS_SCHEDE_INVENTARIO, Object.values(tds_schede_inventario));
        tds_schede_inventario = Object.assign({ id: result[0].insertId }, req.body);
        return res.status(code_enum_1.Code.CREATED)
            .send(new response_1.HttpResponse(code_enum_1.Code.CREATED, status_enum_1.Status.CREATED, 'Tds_schede_inventario created', tds_schede_inventario));
    }
    catch (error) {
        console.error(error);
        return res.status(code_enum_1.Code.INTERNAL_SERVER_ERROR)
            .send(new response_1.HttpResponse(code_enum_1.Code.INTERNAL_SERVER_ERROR, status_enum_1.Status.INTERNAL_SERVER_ERROR, 'An error occurred'));
    }
});
exports.createTds_schede_inventario = createTds_schede_inventario;
const updateTds_schede_inventario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.info(`[${new Date().toLocaleString()}] Incoming ${req.method}${req.originalUrl} Request from ${req.rawHeaders[0]} ${req.rawHeaders[1]}`);
    let tds_schede_inventario = Object.assign({}, req.body);
    try {
        const pool = yield (0, mysql_config_1.connection)();
        const result = yield pool.query(tds_schede_inventario_query_1.QUERY.SELECT_TDS_SCHEDE_INVENTARIO, [req.params.tds_schede_inventarioId]);
        if ((result[0]).length > 0) {
            const result = yield pool.query(tds_schede_inventario_query_1.QUERY.UPDATE_TDS_SCHEDE_INVENTARIO, [...Object.values(tds_schede_inventario), req.params.tds_schede_inventarioId]);
            pool.end();
            return res.status(code_enum_1.Code.OK)
                .send(new response_1.HttpResponse(code_enum_1.Code.OK, status_enum_1.Status.OK, 'Tds_schede_inventario updated', Object.assign(Object.assign({}, tds_schede_inventario), { id: req.params.tds_schede_inventarioId })));
        }
        else {
            return res.status(code_enum_1.Code.NOT_FOUND)
                .send(new response_1.HttpResponse(code_enum_1.Code.NOT_FOUND, status_enum_1.Status.NOT_FOUND, 'Tds_schede_inventario not found'));
        }
    }
    catch (error) {
        console.error(error);
        return res.status(code_enum_1.Code.INTERNAL_SERVER_ERROR)
            .send(new response_1.HttpResponse(code_enum_1.Code.INTERNAL_SERVER_ERROR, status_enum_1.Status.INTERNAL_SERVER_ERROR, 'An error occurred'));
    }
});
exports.updateTds_schede_inventario = updateTds_schede_inventario;
const deleteTds_schede_inventario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.info(`[${new Date().toLocaleString()}] Incoming ${req.method}${req.originalUrl} Request from ${req.rawHeaders[0]} ${req.rawHeaders[1]}`);
    try {
        const pool = yield (0, mysql_config_1.connection)();
        const result = yield pool.query(tds_schede_inventario_query_1.QUERY.SELECT_TDS_SCHEDE_INVENTARIO, [req.params.tds_schede_inventarioId]);
        if ((result[0]).length > 0) {
            const result = yield pool.query(tds_schede_inventario_query_1.QUERY.DELETE_TDS_SCHEDE_INVENTARIO, [req.params.tds_schede_inventarioId]);
            pool.end();
            return res.status(code_enum_1.Code.OK)
                .send(new response_1.HttpResponse(code_enum_1.Code.OK, status_enum_1.Status.OK, 'Tds_schede_inventario deleted'));
        }
        else {
            return res.status(code_enum_1.Code.NOT_FOUND)
                .send(new response_1.HttpResponse(code_enum_1.Code.NOT_FOUND, status_enum_1.Status.NOT_FOUND, 'Tds_schede_inventario not found'));
        }
    }
    catch (error) {
        console.error(error);
        return res.status(code_enum_1.Code.INTERNAL_SERVER_ERROR)
            .send(new response_1.HttpResponse(code_enum_1.Code.INTERNAL_SERVER_ERROR, status_enum_1.Status.INTERNAL_SERVER_ERROR, 'An error occurred'));
    }
});
exports.deleteTds_schede_inventario = deleteTds_schede_inventario;
