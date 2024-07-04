const HandlerCalculate = (req, res) => {
    const expression = req.body.expression;

    const result = eval(expression);

    if (!result) {
        console.error(`failed to calculate: ${expression}`);
        res.status(400).send(`failed to calculate: ${expression}`);
        return;
    }

    res.send(`The result is: ${result}`);
}

module.exports = {
    HandlerCalculate
};