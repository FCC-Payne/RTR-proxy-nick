const mysql = require('mysql');
const config = require('../config.js');

const connection = mysql.createConnection({
  user: 'nick',
  password: config.dbPassword,
  database: 'rtrPhotoViewer',
});

for (let i = 1; i <= 100; i += 1) {
  const imgFileName = i + 99;
  connection.query(`INSERT INTO photos (id, picOne, picTwo, picThree, picFour) VALUES (${i}, '${imgFileName}-1.jpeg', '${imgFileName}-2.jpeg', '${imgFileName}-3.jpeg', '${imgFileName}-4.jpeg')`);
}
