require('dotenv').config()

module.exports = {
  appConfig:{
    app:{
      port:process.env.APP_PORT
    }
  },
  dbConfig:{
    host:process.env.APP_DB_HOST,
    dbName:process.env.APP_DB_NAME
  }
}
