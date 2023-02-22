const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello from NodeJS app2')
})

app.listen(port, () => {
  console.log(`app1 listening on port ${port}`)
})