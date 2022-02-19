require('dotenv/config')
module.exports = {
  appConfig:{
    port:process.env.APP_PORT
  },
  dbConfig:{
    host:process.env.MONGO_DATABASE_URI
  }
}
