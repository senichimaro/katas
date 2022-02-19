const app = require('./app')
const { appConfig } = require('./config')


async function initApp( port ){
  try {
    await app.listen( port , () => { console.log(`listen: ${port}`) } )
  }
  catch( e ) {
    console.error(`ERROR at initApp: ${e.message}`);
  }
}
initApp( appConfig.port )
