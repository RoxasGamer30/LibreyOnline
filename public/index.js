//DATA BASE CONECTION
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'LibreySql',
  password: '12345',
  port: 5432
});

module.exports = pool;

//EXPRESS
import expres
//rutas
app.get("/",(req,res)=> res.sendFile(__dirname + "/pages/Login.HTML"));
app.get("/Register",(req,res)=> res.sendFile(__dirname + "/pages/Register.HTML"));
app.get("/HomePage",(req,res)=> res.sendFile(__dirname + "/pages/HomePage.HTML"));