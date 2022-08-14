const express = require('express');
const path = require('path');
const app = express();
const port = process.env.portfolio_port || 8080;

app.use(express.static(__dirname));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.listen(port, () => console.log('Listening on port: ', port));