CREATE TABLE IF NOT EXISTS members
(
    firstname character varying,
    lastname character varying,
    m_data character varying
);

ALTER TABLE members
    OWNER to postgres;


INSERT INTO members(
    firstname, lastname, m_data)
    VALUES 
('Martin','Taylor','HSKF{lfYow'),
('Clarence','Gonzalez','HSKF{lfYow'),
('Earl','Lee','HSKF{ULcxb'),
('Debra','Ward','HSKF{Qzcal'),
('Ann','Price','HSKF{FABlM'),
('Christine','Hill','HSKF{XAZFf'),
('Laura','Davis','HSKF{QuBWj'),
('Brian','Anderson','HSKF{nbmSs'),
('Jeffrey','Foster','HSKF{litVo'),
('Thomas','Rodriguez','HSKF{ufkqH'),
('Kevin','Cooper','HSKF{qSZHg'),
('Daniel','Reed','HSKF{eYGCL'),
('Angela',' Wood','HSKF{tELSO'),
('Larry','Williams','HSKF{oCEVu'),
('Carlos','Martin','HSKF{QkiVW'),
('Adam','Adams','HSKF{ceUsh'),
('Henry','Rogers','HSKF{PqlXL'),
('Doris','Jones','HSKF{wnoHt'),
('Irene','Cook','HSKF{oVoDv'),
('Arthur','Torres','HSKF{MOOXq'),
('Robert','Coleman','HSKF{YANeb'),
('Deborah','Ramirez','HSKF{APWnO'),
('David','Morris','HSKF{HzNSL'),
('Raymond','Russell','HSKF{SrLne'),
('Margaret','Green','HSKF{cyorl'),
('Billy','Murphy','HSKF{oDyhf'),
('Frances','Parker','HSKF{SvuYv'),
('Nicole','Brown','pTwqE}'),
('Rose','James','RSxAP}'),
('Maria','Jackson','CdYHg}'),
('Philip','Thomas','tvXyc}'),
('Carolyn','Rivera','QPDWz}'),
('Edward','Bryant','dHKBv}'),
('Norma','Cox','rTWiu}'),
('Victor','King','YziYk}'),
('Rachel','Thompson','xvBif}'),
('Virginia','Garcia','JqPAE}'),
('Roger','Hernandez','izapW}'),
('Kathleen','Carter','Rulnd}'),
('Wayne','Morgan','CUgbf}'),
('Randy','Robinson','fcYtH}'),
('Louis','Mitchell','swyIY}'),
('Todd','Murphy','hvduo}'),
('Beverly','Patterson','xoaZf}'),
('Shirley','Edwards','ikhFV}'),
('Katherine','Stewart','NvRZO}'),
('Benjamin','Turner','AQGtg}'),
('Jack','Griffin','BKhRZ}'),
('Anne','Evans','FdCOK}'),
('Craig','Bell','BXcgJ}');

 