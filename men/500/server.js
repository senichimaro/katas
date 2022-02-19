require('dotenv/config')
const app = require('./app');
const { appConfig, dbConfig } = require('./config')
const dbConn = require('./database/host/mongodb')

async function appInit( app, appConfig, dbConfig ){
  try {
    await dbConn( dbConfig.host )
    await app.listen(
      appConfig.port,
      () => console.log(`listen at: ${appConfig.port}`)
    )
  }
  catch(e){
    console.error(`ERROR at app.js in appInit: ${e.message}`);
  }
}

appInit( app, appConfig, dbConfig )
