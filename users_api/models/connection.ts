import mysql from 'mysql2/promise';

export default mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'users_api',
});