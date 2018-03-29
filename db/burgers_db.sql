DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT false,
    date TIMESTAMP,
	PRIMARY KEY (id)
);

INSERT INTO burgers(burger_name) VALUES ('Mushroom Swiss Burger');
INSERT INTO burgers(burger_name) VALUES ('Bacon Bleu Burger');
INSERT INTO burgers(burger_name) VALUES ('Tofurkey Burger');
INSERT INTO burgers(burger_name) VALUES ('Double Cheeseburger');
INSERT INTO burgers(burger_name) VALUES ('Hamburger Lettuce Tomato');
