const mongo = require('mongodb'),
      express = require('express'),
      app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('pages/index.ejs'))
app.get('/about', (req, res) => res.render('pages/about.ejs'))
app.listen(3000, () => console.log('Example app listening on port 3000!'))