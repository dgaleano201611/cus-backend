const mongoose = require('mongoose')

const connect = async() => {
  const mongoUri = process.env.MONGO_DB_URI
  mongoose.connect(mongoUri)

  mongoose.connection.once('open', () => {
    console.log('Connection with mongo OK');
  })
  mongoose.connection.on('error', (error) => {
    console.log('Something went wrong', error);
    
  })

  return mongoose.connection
}

module.exports = {connect}