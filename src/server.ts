const express = require('express')
const path = require('path')
const PORT = 3000

const app = express()
 
const serverPath = path.join(__dirname, '..', 'dist')

app.use(express.static(serverPath))

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}!`)
});