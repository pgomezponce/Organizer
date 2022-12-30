/*
    Script to deploy Organizers database
    @author: Pablo Gómez Ponce
    @version: 0.0.1
    ---
    Scope:
        - Tables related to Auth Access
            - User
            - File
            - Project
            - TaskList
            - Note
*/

DROP DATABASE organizer;
CREATE DATABASE IF NOT EXISTS organizer;
USE organizer;

/*
    ***********************
    USER
    ***********************
*/
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id int AUTO_INCREMENT,
    full_name TEXT,
    email TEXT,
    passkey TEXT,
    created DATETIME DEFAULT NOW(),
    
    PRIMARY KEY (id)
);

/*
    ***********************
    FILE
    ***********************
*/
DROP TABLE IF EXISTS file;
CREATE TABLE file (
    id VARCHAR(128),
    name TEXT,
    isPublic BOOLEAN,
        created DATETIME DEFAULT NOW(),
    PRIMARY KEY (id)
);


/*
    ***********************
    PROJECTS
    ***********************
*/
DROP TABLE IF EXISTS project;
CREATE TABLE project (
    id VARCHAR(128),
    name TEXT,
    isPublic BOOLEAN,
    created DATETIME DEFAULT NOW(),

    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES file(id)
);



/*
    ***********************
    TASKLIST
    ***********************
*/
DROP TABLE IF EXISTS tasklist;
CREATE TABLE tasklist (
    id VARCHAR(128),
    name TEXT,
    isPublic BOOLEAN,
    created DATETIME DEFAULT NOW(),

    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES file(id)
);

/*
    ***********************
    NOTE
    ***********************
*/
DROP TABLE IF EXISTS note;
CREATE TABLE note (
    id VARCHAR(128),
    name TEXT,
    isPublic BOOLEAN,
    created DATETIME DEFAULT NOW(),

    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES file(id)
);

