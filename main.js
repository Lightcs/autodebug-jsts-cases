const express = require('express');
const app = express();
const handler = require('./handler');

app.get('/', handler.HandlerMain);
app.post('/calculate', handler.HandlerCalculate);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
