const express = require('express');
const bodyparser = require('body-parser');
const app = express();
let cors = require('cors');


app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(require('./routes/correoRoutes'))

app.listen('3000', () => {
    console.log('escuchando')
})