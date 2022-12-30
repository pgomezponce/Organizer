SET @uniqueID = UUID();

INSERT INTO organizer.file (id, name, isPublic) VALUES(@uniqueID, 'NULL', FALSE);
INSERT INTO organizer.note (id, name, isPublic) VALUES(@uniqueID, 'NULL', FALSE);