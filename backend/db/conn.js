const mongoose = require('mongoose')

mongoose
  .connect(
    `mongodb+srv://ashish:ashish1234@cluster0.cxrssld.mongodb.net/?retryWrites=true&w=majority`,
  )
  .then((res) => {
    console.log('CONNECTION ESTABLISHED')
  })
  .catch((err) => {
    console.log('MONGOOSE ERROR', err)
  })
