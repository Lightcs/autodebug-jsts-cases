const express = require('express');
const app = express();
const handler = require('./handler');
const path = require('path');
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.post('/calculate', handler.HandlerCalculate);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
