var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "your-password",
    database: "bamazon"
});
connection.connect(function (err) {
    if (err) {
        console.log(err);
    }
});
var queryAll = 'select * from products;';

connection.query(queryAll, function (error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    choose();
    connection.end();
});
function choose() {
    inquirer
        .prompt([
            {
                name: "item_id",
                type: "input",
                message: "Which ID of the product you would like to buy?",
            },
            {
                name: "stock_quantiy",
                type: "input",
                message: "How many units of the product you would like to buy?",
            }
        ])
        .then(function (answer) {
            //console.log(answer.item_id);
            //console.log(answer.stock_quantiy);
            var connection = mysql.createConnection({
                host: "localhost",
                port: 3306,
                user: "root",
                password: "your-password",
                database: "bamazon"
            });
            connection.connect(function (err) {
                if (err) {
                    console.log(err);
                }
            });
            connection.query('select * from products where item_id = ?', [answer.item_id],function (err, res) {
                if (err) {
                    console.log(err);
                }
                //console.log(res[0].stock_quantity);
                if(res[0].stock_quantity >= answer.stock_quantiy){
                    //console.log("ok");
                    var updatedQuantity = res[0].stock_quantity - answer.stock_quantiy;
                    connection.query('UPDATE products SET stock_quantity = ? WHERE item_id = ?', [updatedQuantity, answer.item_id]);
                    //console.log(res[0].stock_quantity);
                }else{
                    console.log("Insufficient quantity!");
                };
                var total = answer.stock_quantiy * res[0].price;
                console.log("Your total equals to: " + total + "$");
                connection.end();
            });
        });
}