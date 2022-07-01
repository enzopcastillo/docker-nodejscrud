const express = require('express');
const cors = require('cors');
const config = require('./config');
const {mongoose} = require('./database');

const PORT = config.PORT;
const HOST = config.HOST;

var app = express();

app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

app.use('/api/agente', require('./routes/agente.route'));
app.use('/api/sector', require('./routes/sector.route'));

/*
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('Server started on port', app.get('port'));
});
*/

app.get('/', (req, res)=>{
    res.send('Hello world');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);