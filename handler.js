const HandlerMain = (req, res) => {
    const htmlResponse = `
        <html>
            <head>
                <title>Calculator</title>
            </head>
            <body>
                <h1>Calculator</h1>
                <form action="/calculate" method="POST">
                    <input type="text" name="expression" placeholder="Enter an arithmetic expression" required>
                    <button type="submit">Calculate</button>
                </form>
            </body>
        </html>
    `;

    res.send(htmlResponse);
}

const HandlerCalculate = (req, res) => {
    const expression = req.body.expression;

    const result = eval(expression);

    res.send(`The result is: ${result}`);
}

module.exports = {
    HandlerMain,
    HandlerCalculate
};