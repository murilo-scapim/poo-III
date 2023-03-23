import mysql from 'mysql2/promise';

export default mysql.createPool({
  host: 'containers-us-west-118.railway.app',
  port: 7981,
  user: 'root',
  password: 'WxI5dOin4PlqPfSSywvw',
  database: 'railway',
});