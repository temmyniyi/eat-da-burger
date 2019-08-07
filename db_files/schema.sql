DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db; 

USE burger_db; 
DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    burger_name VARCHAR (255), 
    devoured BOOLEAN NOT NULL DEFAULT 0
); 