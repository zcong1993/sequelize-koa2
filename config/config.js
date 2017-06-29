module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD || "",
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": process.env.DB_TYPE || "mysql",
    "logging": process.env.NODE_ENV !== 'production' ? console.log : ""
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD || "",
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": process.env.DB_TYPE || "mysql",
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD || "",
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": process.env.DB_TYPE || "mysql",
  }
}
