require('dotenv/config')
const mongoose = require('mongoose')

mongoose.connection.on('open', () => console.log(`db connected`) )

async function dbConn( host ){
  try {
    mongoose.connect( host, { useNewUrlParser:true, useUnifiedTopology:true } )
  }
  catch(e){
    console.error(`ERROR at controllers.js in dbConn: ${e.message}`);
  }
}

module.exports = dbConn
