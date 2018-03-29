DROP DATABASE IF EXISTS y2grvx4scz253cls;
CREATE DATABASE y2grvx4scz253cls;
USE y2grvx4scz253cls;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(255),
	devoured BOOLEAN NOT NULL DEFAULT false,
    createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);
INSERT INTO burgers(burger_name) VALUES ('Mushroom Swiss Burger');
INSERT INTO burgers(burger_name) VALUES ('Bacon Bleu Burger');
INSERT INTO burgers(burger_name) VALUES ('Tofurkey Burger');
INSERT INTO burgers(burger_name) VALUES ('Double Cheeseburger');
INSERT INTO burgers(burger_name) VALUES ('Hamburger Lettuce Tomato');