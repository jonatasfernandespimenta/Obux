module.exports = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "ObuxNest",
  entities: ['dist/**/*.entity.js'],
  synchronize: true
}