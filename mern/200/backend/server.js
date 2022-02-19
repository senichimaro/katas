const app = require('./app')
const { appConfig, dbConfig } = require('./config')
const dbConn = require('./db/connect')



async function appInit( app, appConfig, dbConfig ){
  try {
    await dbConn(dbConfig.host, dbConfig.dbName)
    app.listen( appConfig.app.port , ()=> console.log(`listen at: ${appConfig.app.port}`)  )
  }
  catch(e){
    console.error(`appInit error: ${e.message}`);
  }
}

appInit(app, appConfig, dbConfig)
