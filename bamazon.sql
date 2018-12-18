DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NULL,
department_name VARCHAR(100) NULL,
price DECIMAL(10,4) NULL,
stock_quantity INT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Dress", "Clothes", 49.99, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Christmas Sweater", "Clothes", 15.35, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Necklace", "Jewelry", 570, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Bagel", "Food", 2.80, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Coffee", "Food", 5, 80);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Pastry Crisp", "Food", 0.25, 75);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Harry Potter", "Book", 10.50, 37);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Lord of the Rings", "Book", 11, 94);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Chair", "Furniture", 76.80, 64);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Taylor Swift", "Concert Tickets", 250, 500);