-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;
-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

-- CREATE TABLE category (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     category_name VARCHAR(30) NOT NULL
-- );

-- CREATE TABLE product (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     product_name VARCHAR(30) NOT NULL,
--     price DECIMAL NOT NULL,
--     stock INT DEFAULT 10 NOT NULL, -- INT on itself helps validates that the data inside it contains only numeric values.
--     CONSTRAINT CHK_StockNumeric CHECK (stock >= 0) -- This line ensures that the 'stock' column contains only non-negative integer values.
--     category_id INT,
--     FOREIGN KEY (category_id)
--     REFERENCES category(id)
--     ON DELETE SET NULL
-- );

-- CREATE TABLE tag (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     tag_name VARCHAR(30)
-- );

-- CREATE TABLE product_tag (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     product_id INT,
--     FOREIGN KEY (product_id)
--     REFERENCES product(id)
--     ON DELETE SET NULL,
--     tag_id INT,
--     FOREIGN KEY (tag_id)
--     REFERENCES tag(id)
--     ON DELETE SET NULL
-- );


