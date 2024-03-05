CREATE DATABASE IF NOT EXISTS Faculty;
USE Faculty;

CREATE TABLE faculty (
  FID CHAR(36) PRIMARY KEY,
  Name CHAR(255),
  Dept CHAR(255)
);

CREATE TABLE facultyRecord (
  FID CHAR(36),
  Date DATE,
  Purpose CHAR(255),
  OutTime DATETIME PRIMARY KEY,
  InTime DATETIME,
  FOREIGN KEY (FID) REFERENCES faculty(FID)
);

CREATE TABLE users (
    username VARCHAR(255) PRIMARY KEY,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'naive') NOT NULL
);


