CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE chirps
(
  id int(11) not null
  auto_increment,
  author VARCHAR
  (255) not null,
  chirp VARCHAR
  (255) not null,
  createdAt timestamp not null default current_timestamp,
  primary key
  (id)
);