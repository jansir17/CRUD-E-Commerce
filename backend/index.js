const express = require('express')
const app = express()
const port = 4000
const mongoose = require('mongoose');
const cors = require('cors')
app.use(cors())

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/amazon-linker',{
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useFindAndModify: false
})

const productRoutes = require('./routes/productRoutes')
app.use('/api',productRoutes)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})