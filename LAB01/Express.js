// Import the Express framework
const express = require('express');

// Initialize Express app
const app = express();

// Define port number
const port = 3000;

// Handle GET request to "/"
app.get('/', (req, res) => {
    res.send('Welcome to Express');
});

// Handles GET requests to /products/:category/:productId
app.get('/products/:category/:productId', (req, res) => {
    const category = req.params.category;
    const productId = req.params.productId;
    res.send(`Category: ${category}, Product ID: ${productId}`);
});

// Handles GET requests to /users/:id
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

// Handles GET requests to /posts/:year/:month?
app.get('/posts/:year/:month?', (req, res) => {
    const year = req.params.year;
    const month = req.params.month;
    if (month) {
    res.send(`Posts from ${month}/${year}`);
    } else {
    res.send(`Posts from the year ${year}`);
    }
});

// Handles GET requests to /items/:itemId
app.get('/items/:itemId', (req, res) => {
    const { itemId } = req.params;
    const sort = req.query.sort;

    if (sort) {
        res.send(`Item ID: ${itemId}, sorted by: ${sort}`);
    } else {
        res.send(`Item ID: ${itemId}`);
    }
});


// Create a new router
const router = express.Router();
router.use((req, res, next) => {
    console.log(`Request received at: ${req.method} ${req.url}`);
    next();
});

// Handles GET requests to /products/:category/:productId
router.get('/products/:category/:productId', (req, res) => {
    const { category, productId } = req.params;
    res.send(`Product details - Category: ${category}, Product ID: ${productId}`);
});

// Handles GET requests to /users/:userId
router.get('/users/:userId', (req, res) => {
    const { userId } = req.params;
    res.send(`User Profile - User ID: ${userId}`);
});

// Start the server and listen on the specified port
app.listen(port,() => {
    console.log(`Server is running at http://localhost:${port}`);
});