const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('hello')
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`)
})
