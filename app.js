const express = require('express')

const app = express()
const port = 3000

app.use(express.static('app'))
app.use(express.static('dist'))

app.listen(port, () => console.info(`App up 🎸; listening on port ${port}!`))
