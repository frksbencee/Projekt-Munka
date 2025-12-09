CREATE DATABASE IF NOT EXISTS singsingmusichall
USE singsingmusichall


CREATE USER IF NOT EXISTS  'fonok'@'localhost' IDENTIFIED BY 'asd123';
GRANT ALL PRIVILEGES ON singsingmusichall.* TO 'fonok'@'localhost';
FLUSH PRIVILEGES

CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fname VARCHAR(100) NOT NULL,
    lname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    pnumber INT(30) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMETSTAMP DEFAULT CURRENT_TIMESTAMP
);

