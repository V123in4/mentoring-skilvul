USE tpa_04;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    birthday DATE
);

CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255)
);
