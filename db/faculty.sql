CREATE DATABASE IF NOT EXISTS Faculty;
USE Faculty;

CREATE TABLE faculty (
  FID CHAR(36) PRIMARY KEY,
  Name CHAR(255),
  Dept CHAR(255),
  Reg_no CHAR(255)
);

CREATE TABLE facultyRecord (
  FID CHAR(36),
  Date DATE,
  Purpose CHAR(255),
  OutTime DATETIME PRIMARY KEY,
  InTime DATETIME,
  FOREIGN KEY (FID) REFERENCES faculty(FID)
);

