CREATE DATABASE IF NOT EXISTS luminadb;

USE luminadb;

DROP TABLE IF EXISTS users;

CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_role` int,
  `email` text,
  `first_name` text,
  `last_name` text,
  `password` text
);

DROP TABLE IF EXISTS schede;

CREATE TABLE `schede` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `titolo` text,
  `corpo_scheda` text,
  `iscrizioni` text,
  `descrizione_sintetica` text,
  `storia_espositiva` text,
  `classificazione` text 
);

DROP TABLE IF EXISTS autori;

CREATE TABLE `autori` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `formula_precedente` text,
  `formula_successiva` text,
  `categoria` text,
  `nome` text
);


DROP TABLE IF EXISTS tds_schede_autori;


CREATE TABLE `tds_schede_autori` (
  `id_scheda` int,
  `id_autore` int
);


DROP TABLE IF EXISTS cronologie;

CREATE TABLE `cronologie` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `ambito_storico` text,
  `etichetta_data` text,
  `data_da` text,
  `data_a` text
);


DROP TABLE IF EXISTS tds_schede_cronologie;


CREATE TABLE `tds_schede_cronologie` (
  `id_scheda` int,
  `id_cronologia` int
);

DROP TABLE IF EXISTS tds_users_schede;


CREATE TABLE `tds_users_schede` (
  `id_user` int,
  `id_scheda` int,
  `data_modifica` timestamp
);

DROP TABLE IF EXISTS materiali;


CREATE TABLE `materiali` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nome_materiale` text,
  `descrizione` text
);

DROP TABLE IF EXISTS tds_schede_materiali;


CREATE TABLE `tds_schede_materiali` (
  `id_scheda` int,
  `id_materiale` int
);

DROP TABLE IF EXISTS tecniche;


CREATE TABLE `tecniche` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nome_tecnica` text,
  `descrizione` text
);

DROP TABLE IF EXISTS tds_schede_tecniche;


CREATE TABLE `tds_schede_tecniche` (
  `id_scheda` int,
  `id_tecnica` int
);

DROP TABLE IF EXISTS misure;

CREATE TABLE `misure` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `direzione` text,
  `tipo` text,
  `valore` float,
  `unita_di_misura` text
);

DROP TABLE IF EXISTS tds_schede_misure;

CREATE TABLE `tds_schede_misure` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `id_scheda` int,
  `id_misura` int,
  `intero_parziale` text,
  `descrizione` text
);

DROP TABLE IF EXISTS tds_schede_gruppo_misure;

CREATE TABLE `tds_schede_gruppo_misure` (
  `id_scheda` int,
  `id_gruppo_misure` int
);

DROP TABLE IF EXISTS ubicazioni;


CREATE TABLE `ubicazioni` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `ubicazione` text,
  `descrizione` text
);

DROP TABLE IF EXISTS tds_schede_ubicazioni;


CREATE TABLE `tds_schede_ubicazioni` (
  `id_scheda` int,
  `id_ubicazione` int
);

DROP TABLE IF EXISTS inventari;


CREATE TABLE `inventari` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `numero_inventario` text,
  `nome_inventario` text,
  `descrizione` text
);


DROP TABLE IF EXISTS tds_schede_inventari;



CREATE TABLE `tds_schede_inventari` (
  `id_scheda` int,
  `id_inventario` int
);

DROP TABLE IF EXISTS provenienze;


CREATE TABLE `provenienze` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `provenienza` text,
  `descrizione` text,
  `note` text
);


DROP TABLE IF EXISTS tds_schede_provenienze;


CREATE TABLE `tds_schede_provenienze` (
  `id_scheda` int,
  `id_provenienza` int
);

DROP TABLE IF EXISTS mostre;


CREATE TABLE `mostre` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `curatore` text,
  `titolo_mostra` text,
  `data_mostra` text,
  `luogo_mostra` text,
  `descrizione` text
);

DROP TABLE IF EXISTS tds_schede_mostre;

CREATE TABLE `tds_schede_mostre` (
  `id_scheda` int,
  `id_mostra` int
);

DROP TABLE IF EXISTS bibliografie;


CREATE TABLE `bibliografie` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `riferimento_bibliografico` text
);


DROP TABLE IF EXISTS tds_schede_bibliografie;

CREATE TABLE `tds_schede_bibliografie` (
  `id_scheda` int,
  `id_bibliografia` int
);

DROP TABLE IF EXISTS altreBibliografie;


CREATE TABLE `altreBibliografie` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `riferimento_bibliografico` text
);


DROP TABLE IF EXISTS tds_schede_altreBibliografie;

CREATE TABLE `tds_schede_altreBibliografie` (
  `id_scheda` int,
  `id_altreBibliografie` int
);

DROP TABLE IF EXISTS immagini;

CREATE TABLE `immagini` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `path` text,
  `didascalia` text
);

DROP TABLE IF EXISTS tds_schede_immagini;

CREATE TABLE `tds_schede_immagini` (
  `id_scheda` int,
  `id_immagine` int
);

DROP TABLE IF EXISTS documentazioniFotografiche;

CREATE TABLE `documentazioniFotografiche` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `riferimento_bibliografico` text
);


DROP TABLE IF EXISTS tds_schede_documentazioniFotografiche;

CREATE TABLE `tds_schede_documentazioniFotografiche` (
  `id_scheda` int,
  `id_documentazioneFotografica` int
);


ALTER TABLE `tds_users_schede` ADD FOREIGN KEY (`id_scheda`) REFERENCES `schede` (`id`);

ALTER TABLE `tds_users_schede` ADD FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

ALTER TABLE `tds_schede_materiali` ADD FOREIGN KEY (`id_scheda`) REFERENCES `schede` (`id`);

ALTER TABLE `tds_schede_materiali` ADD FOREIGN KEY (`id_materiale`) REFERENCES `materiali` (`id`);

ALTER TABLE `tds_schede_tecniche` ADD FOREIGN KEY (`id_scheda`) REFERENCES `schede` (`id`);

ALTER TABLE `tds_schede_tecniche` ADD FOREIGN KEY (`id_tecnica`) REFERENCES `tecniche` (`id`);

ALTER TABLE `tds_schede_ubicazioni` ADD FOREIGN KEY (`id_scheda`) REFERENCES `schede` (`id`);

ALTER TABLE `tds_schede_ubicazioni` ADD FOREIGN KEY (`id_ubicazione`) REFERENCES `ubicazioni` (`id`);

ALTER TABLE `tds_schede_inventari` ADD FOREIGN KEY (`id_scheda`) REFERENCES `schede` (`id`);

ALTER TABLE `tds_schede_inventari` ADD FOREIGN KEY (`id_inventario`) REFERENCES `inventari` (`id`);

ALTER TABLE `tds_schede_provenienze` ADD FOREIGN KEY (`id_scheda`) REFERENCES `schede` (`id`);

ALTER TABLE `tds_schede_provenienze` ADD FOREIGN KEY (`id_provenienza`) REFERENCES `provenienze` (`id`);

ALTER TABLE `tds_schede_mostre` ADD FOREIGN KEY (`id_scheda`) REFERENCES `schede` (`id`);

ALTER TABLE `tds_schede_mostre` ADD FOREIGN KEY (`id_mostra`) REFERENCES `mostre` (`id`);

ALTER TABLE `tds_schede_bibliografie` ADD FOREIGN KEY (`id_scheda`) REFERENCES `schede` (`id`);

ALTER TABLE `tds_schede_bibliografie` ADD FOREIGN KEY (`id_bibliografie`) REFERENCES `bibliografie` (`id`);

ALTER TABLE `tds_schede_altreBibliografie` ADD FOREIGN KEY (`id_scheda`) REFERENCES `schede` (`id`);

ALTER TABLE `tds_schede_altreBibliografie` ADD FOREIGN KEY (`id`) REFERENCES `altreBibliografie` (`id`);

ALTER TABLE `tds_schede_autori` ADD FOREIGN KEY (`id_scheda`) REFERENCES `schede` (`id`);

ALTER TABLE `tds_schede_autori` ADD FOREIGN KEY (`id_autore`) REFERENCES `autori` (`id`);

ALTER TABLE `tds_schede_immagini` ADD FOREIGN KEY (`id_scheda`) REFERENCES `schede` (`id`);

ALTER TABLE `tds_schede_immagini` ADD FOREIGN KEY (`id_immagine`) REFERENCES `immagini` (`id`);

ALTER TABLE `tds_schede_cronologie` ADD FOREIGN KEY (`id_scheda`) REFERENCES `schede` (`id`);

ALTER TABLE `tds_schede_cronologie` ADD FOREIGN KEY (`id_cronologia`) REFERENCES `cronologie` (`id`);

ALTER TABLE `tds_schede_documentazioniFotografiche` ADD FOREIGN KEY (`id_scheda`) REFERENCES `schede` (`id`);

ALTER TABLE `tds_schede_documentazioniFotografiche` ADD FOREIGN KEY (`documentazioniFotografiche`) REFERENCES `documentazioniFotografiche` (`id`);

ALTER TABLE `tds_schede_gruppo_misure` ADD FOREIGN KEY (`id_scheda`) REFERENCES `schede` (`id`);

ALTER TABLE `tds_schede_gruppo_misure` ADD FOREIGN KEY (`id`) REFERENCES `tds_schede_misure` (`id`);

ALTER TABLE `tds_schede_misure` ADD FOREIGN KEY (`id_misura`) REFERENCES `misure` (`id`);

ALTER TABLE `tds_schede_misure` ADD FOREIGN KEY (`id`) REFERENCES `misure` (`id`);