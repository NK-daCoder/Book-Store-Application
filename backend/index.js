const express = require('express') // "require" means we are importing
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require("cors");

const app = express();
const customPort = 3000;
const port = process.env.PORT || customPort;
const mongoDBConnection = process.env.DB_URL;

// middleware
app.use(express.json())

const corsOptions = {
    origin: ['http://localhost:5173'], // Replace with your frontend URL
    credentials: true, // Allow cookies or other credentials
};

app.use(cors(corsOptions));

// routes
const bookRoutes = require("./src/books/book.route");
const orderRoutes = require('./src/orders/order.route');
const userRoutes = require('./src/users/user.route');

// main api route. How it will look: `http://localhost:5173/api/books/${bookRoutes}`
app.use("/api/books", bookRoutes)
app.use("/api/orders", orderRoutes)
app.use("/api/auth", userRoutes)

// handelling routes
// Add this after all your routes
app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});

async function main() {
    await mongoose.connect(mongoDBConnection);
  
    app.get('/', (req, res) => {
        res.send('Book Server activated')
    })
  
}

main().then(() => console.log("mongodb connected successfully :)")).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})