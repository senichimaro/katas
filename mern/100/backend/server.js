require('dotenv').config();

const app = require('./app')

const { appConfig, dbConfig } = require('./config');
const connectDb = require('./db/mongodb')

async function initApp(appConfig, dbConfig){
  try {
    connectDb(dbConfig);
    app.listen(
      appConfig.port,
      ()=>console.log(`listen on: ${appConfig.port}`)
    )
  }
  catch(err){
    console.error(`error in connection : ${err}`);
    // let's kill the process and save it
    process.exit(0)
  }
}
initApp(appConfig, dbConfig);
