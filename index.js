const express = require('express');
const winston = require('winston');

// Initialize Express app
const app = express();
const port = 3000;

console.log('Starting Calculator Microservice...');

// Setup Winston logger
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'calculator-microservice' },
    transports: [
        new winston.transports.Console({ format: winston.format.simple() }),
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' })
    ],
});

// Middleware to parse query parameters
app.use(express.json());

// Function to validate numbers
const validateNumbers = (num1, num2) => {
    console.log(`Validating inputs: num1=${num1}, num2=${num2}`);
    if (isNaN(num1) || isNaN(num2)) {
        console.log('Validation failed: Invalid numbers');
        return false;
    }
    return true;
};

// Arithmetic operations endpoints
app.get('/add', (req, res) => {
    console.log('Received request for addition');
    const { num1, num2 } = req.query;
    if (!validateNumbers(num1, num2)) {
        logger.error('Invalid input: Numbers are required');
        return res.status(400).json({ error: 'Invalid input: Numbers are required' });
    }
    const result = parseFloat(num1) + parseFloat(num2);
    console.log(`Addition result: ${result}`);
    logger.info(`Addition operation: ${num1} + ${num2} = ${result}`);
    res.json({ result });
});

app.get('/subtract', (req, res) => {
    console.log('Received request for subtraction');
    const { num1, num2 } = req.query;
    if (!validateNumbers(num1, num2)) {
        logger.error('Invalid input: Numbers are required');
        return res.status(400).json({ error: 'Invalid input: Numbers are required' });
    }
    const result = parseFloat(num1) - parseFloat(num2);
    console.log(`Subtraction result: ${result}`);
    logger.info(`Subtraction operation: ${num1} - ${num2} = ${result}`);
    res.json({ result });
});

app.get('/multiply', (req, res) => {
    console.log('Received request for multiplication');
    const { num1, num2 } = req.query;
    if (!validateNumbers(num1, num2)) {
        logger.error('Invalid input: Numbers are required');
        return res.status(400).json({ error: 'Invalid input: Numbers are required' });
    }
    const result = parseFloat(num1) * parseFloat(num2);
    console.log(`Multiplication result: ${result}`);
    logger.info(`Multiplication operation: ${num1} * ${num2} = ${result}`);
    res.json({ result });
});

app.get('/divide', (req, res) => {
    console.log('Received request for division');
    const { num1, num2 } = req.query;
    if (!validateNumbers(num1, num2)) {
        logger.error('Invalid input: Numbers are required');
        return res.status(400).json({ error: 'Invalid input: Numbers are required' });
    }
    if (parseFloat(num2) === 0) {
        console.log('Error: Division by zero attempted');
        logger.error('Division by zero error');
        return res.status(400).json({ error: 'Division by zero is not allowed' });
    }
    const result = parseFloat(num1) / parseFloat(num2);
    console.log(`Division result: ${result}`);
    logger.info(`Division operation: ${num1} / ${num2} = ${result}`);
    res.json({ result });
});

// Start the server
app.listen(port, () => {
    console.log(`Calculator microservice running on http://localhost:${port}`);
    logger.info(`Calculator microservice running on http://localhost:${port}`);
});
