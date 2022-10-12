var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "panda@123##",
  database: "stud"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE student (name VARCHAR(255), id int, branch VARCHAR(250))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});