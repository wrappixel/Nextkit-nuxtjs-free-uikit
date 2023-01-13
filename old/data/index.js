// const bodyParser = require('body-parser')
const app = require('express')()
const fs = require('fs')

// app.use(bodyParser.json())
app.all('/*', (req, res) => {
//   res.json({ path : req.path })
  let rawdata = fs.readFileSync(`./data${req.path}.json`);
  res.json(JSON.parse(rawdata))
})

module.exports = app