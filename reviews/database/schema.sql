DROP DATABASE IF EXISTS rtrReviews;

CREATE DATABASE rtrReviews;

USE rtrReviews;

CREATE TABLE users (
  user_id int NOT NULL AUTO_INCREMENT,
  name varchar(30),
  review_count int ,
  height varchar(5),
  weight varchar(8),
  age int NOT NULL,
  size int,
  bust varchar(5),
  body_type varchar(15),
  PRIMARY KEY (user_id)
);

CREATE TABLE dresses (
  dress_id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (dress_id)
);

CREATE TABLE photos (
  photos_id int NOT NULL AUTO_INCREMENT,
  url1 int,
  url2 int,
  url3 int,
  PRIMARY KEY (photos_id)
);

CREATE TABLE reviews (
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  review_body MEDIUMTEXT NOT NULL,
  review_title varchar(100) NOT NULL,
  rating int NOT NULL,
  date_posted date NOT NULL,
  size_worn varchar(5) NOT NULL,
  occasion varchar(15) NOT NULL,
  fit varchar(25),
  photos_id int,
  dress_id int NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (photos_id) REFERENCES photos (photos_id),
  FOREIGN KEY (dress_id) REFERENCES dresses (dress_id),
  FOREIGN KEY (user_id) REFERENCES users (user_id)
);