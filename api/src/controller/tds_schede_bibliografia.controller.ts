import { Request, Response } from 'express';
import { FieldPacket, OkPacket, ResultSetHeader, RowDataPacket } from 'mysql2';
import { connection } from '../config/mysql.config';
import { HttpResponse } from '../domain/response';
import { Code } from '../enum/code.enum';
import { Status } from '../enum/status.enum';
import { Tds_schede_bibliografia } from '../interface/tds_schede_bibliografia';
import { QUERY } from '../query/tds_schede_bibliografia.query';

type ResultSet = [RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader, FieldPacket[]];

export const getTds_schede_bibliografie = async (req: Request, res: Response): Promise<Response<Tds_schede_bibliografia[]>> => {
  console.info(`[${new Date().toLocaleString()}] Incoming ${req.method}${req.originalUrl} Request from ${req.rawHeaders[0]} ${req.rawHeaders[1]}`);
  try {
    const pool = await connection();
    const result: ResultSet = await pool.query(QUERY.SELECT_TDS_SCHEDE_BIBLIOGRAFIE);
    pool.end();
return res.status(Code.OK)
      .send(new HttpResponse(Code.OK, Status.OK, 'Tds_schede_bibliografie retrieved', result[0]));
  } catch (error: unknown) {
    console.error(error);
    return res.status(Code.INTERNAL_SERVER_ERROR)
      .send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.INTERNAL_SERVER_ERROR, 'An error occurred'));
  }
};

export const getTds_schede_bibliografia = async (req: Request, res: Response): Promise<Response<Tds_schede_bibliografia>> => {
  console.info(`[${new Date().toLocaleString()}] Incoming ${req.method}${req.originalUrl} Request from ${req.rawHeaders[0]} ${req.rawHeaders[1]}`);
  try {
    const pool = await connection();
    const result: ResultSet = await pool.query(QUERY.SELECT_TDS_SCHEDE_BIBLIOGRAFIA, [req.params.tds_schede_bibliografiaId]);
    if (((result[0]) as Array<any>).length > 0) {
      pool.end();
return res.status(Code.OK)
        .send(new HttpResponse(Code.OK, Status.OK, 'Tds_schede_bibliografia retrieved', result[0]));
    } else {
      return res.status(Code.NOT_FOUND)
        .send(new HttpResponse(Code.NOT_FOUND, Status.NOT_FOUND, 'Tds_schede_bibliografia not found'));
    }
  } catch (error: unknown) {
    console.error(error);
    return res.status(Code.INTERNAL_SERVER_ERROR)
      .send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.INTERNAL_SERVER_ERROR, 'An error occurred'));
  }
};

export const createTds_schede_bibliografia = async (req: Request, res: Response): Promise<Response<Tds_schede_bibliografia>> => {
  console.info(`[${new Date().toLocaleString()}] Incoming ${req.method}${req.originalUrl} Request from ${req.rawHeaders[0]} ${req.rawHeaders[1]}`);
  let tds_schede_bibliografia: Tds_schede_bibliografia = { ...req.body };
  try {
    const pool = await connection();
    const result: ResultSet = await pool.query(QUERY.CREATE_TDS_SCHEDE_BIBLIOGRAFIA, Object.values(tds_schede_bibliografia));
    tds_schede_bibliografia = { id: (result[0] as ResultSetHeader).insertId, ...req.body };
    return res.status(Code.CREATED)
      .send(new HttpResponse(Code.CREATED, Status.CREATED, 'Tds_schede_bibliografia created', tds_schede_bibliografia));
  } catch (error: unknown) {
    console.error(error);
    return res.status(Code.INTERNAL_SERVER_ERROR)
      .send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.INTERNAL_SERVER_ERROR, 'An error occurred'));
  }
};

export const updateTds_schede_bibliografia = async (req: Request, res: Response): Promise<Response<Tds_schede_bibliografia>> => {
  console.info(`[${new Date().toLocaleString()}] Incoming ${req.method}${req.originalUrl} Request from ${req.rawHeaders[0]} ${req.rawHeaders[1]}`);
  let tds_schede_bibliografia: Tds_schede_bibliografia = { ...req.body };
  try {
    const pool = await connection();
    const result: ResultSet = await pool.query(QUERY.SELECT_TDS_SCHEDE_BIBLIOGRAFIA, [req.params.tds_schede_bibliografiaId]);
    if (((result[0]) as Array<any>).length > 0) {
      const result: ResultSet = await pool.query(QUERY.UPDATE_TDS_SCHEDE_BIBLIOGRAFIA, [...Object.values(tds_schede_bibliografia), req.params.tds_schede_bibliografiaId]);
      pool.end();
return res.status(Code.OK)
        .send(new HttpResponse(Code.OK, Status.OK, 'Tds_schede_bibliografia updated', { ...tds_schede_bibliografia, id: req.params.tds_schede_bibliografiaId }));
    } else {
      return res.status(Code.NOT_FOUND)
        .send(new HttpResponse(Code.NOT_FOUND, Status.NOT_FOUND, 'Tds_schede_bibliografia not found'));
    }
  } catch (error: unknown) {
    console.error(error);
    return res.status(Code.INTERNAL_SERVER_ERROR)
      .send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.INTERNAL_SERVER_ERROR, 'An error occurred'));
  }
};

export const deleteTds_schede_bibliografia = async (req: Request, res: Response): Promise<Response<Tds_schede_bibliografia>> => {
  console.info(`[${new Date().toLocaleString()}] Incoming ${req.method}${req.originalUrl} Request from ${req.rawHeaders[0]} ${req.rawHeaders[1]}`);
  try {
    const pool = await connection();
    const result: ResultSet = await pool.query(QUERY.SELECT_TDS_SCHEDE_BIBLIOGRAFIA, [req.params.tds_schede_bibliografiaId]);
    if (((result[0]) as Array<any>).length > 0) {
      const result: ResultSet = await pool.query(QUERY.DELETE_TDS_SCHEDE_BIBLIOGRAFIA, [req.params.tds_schede_bibliografiaId]);
      pool.end();
return res.status(Code.OK)
        .send(new HttpResponse(Code.OK, Status.OK, 'Tds_schede_bibliografia deleted'));
    } else {
      return res.status(Code.NOT_FOUND)
        .send(new HttpResponse(Code.NOT_FOUND, Status.NOT_FOUND, 'Tds_schede_bibliografia not found'));
    }
  } catch (error: unknown) {
    console.error(error);
    return res.status(Code.INTERNAL_SERVER_ERROR)
      .send(new HttpResponse(Code.INTERNAL_SERVER_ERROR, Status.INTERNAL_SERVER_ERROR, 'An error occurred'));
  }
};
