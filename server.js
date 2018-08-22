const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');
const app = express();
const PORT = 7000;

app.use(bodyParser.json())
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(flash());
app.use(session({
    secret: 'thisIsSecret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose');
require('./server/config/routes')(app);
  
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})
