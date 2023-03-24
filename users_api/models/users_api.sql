CREATE DATABASE IF NOT EXISTS users_api;

USE users_api;

CREATE TABLE IF NOT EXISTS users
(
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO users(username, password)
VALUES
('alex','123456'),
('bruce', 'secret'),
('ana', 'senha-123'),
('fabio', 'password'),
('marcos', 'secret-password'),
('sara', '4321');