CREATE TABLE cdr (
  calldate timestamp NOT NULL default CURRENT_TIMESTAMP,
  clid varchar(80) NOT NULL default '',
  src varchar(80) NOT NULL default '',
  dst varchar(80) NOT NULL default '',
  dcontext varchar(80) NOT NULL default '',
  channel varchar(80) NOT NULL default '',
  dstchannel varchar(80) NOT NULL default '',
  lastapp varchar(80) NOT NULL default '',
  lastdata varchar(80) NOT NULL default '',
  duration int NOT NULL default '0',
  billsec int NOT NULL default '0',
  disposition varchar(45) NOT NULL default '',
  amaflags int NOT NULL default '0',
  accountcode varchar(20) NOT NULL default '',
  uniqueid varchar(32) NOT NULL default '',
  userfield varchar(255) NOT NULL default ''
);


INSERT INTO cdr (src, dst, dcontext, disposition)
  VALUES ('123456789', '987654321', 'context-out', 'ANSWERED');

INSERT INTO cdr (src, dst, dcontext, disposition)
  VALUES ('12345', '54321', 'context-in', 'ANSWERED');

INSERT INTO cdr (src, dst, dcontext, disposition, calldate)
VALUES ('12345', '54321', 'context-in', 'ANSWERED', TIMESTAMP '2020-01-15 13:37:42');

INSERT INTO cdr (src, dst, dcontext, disposition, calldate)
VALUES ('12345', '54321', 'context-in', 'ANSWERED', TIMESTAMP '2020-01-17 06:09:00');

INSERT INTO cdr (src, dst, dcontext, disposition, calldate)
VALUES ('12345', '54321', 'context-in', 'ANSWERED', TIMESTAMP '2020-01-15 04:20:42');
