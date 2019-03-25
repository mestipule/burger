CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    is_devoured BOOLEAN DEFAULT false,

    PRIMARY key (id);
);



