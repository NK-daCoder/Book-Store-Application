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
app.use(cors({
    // fontend url
    origin: ["http://localhost:5173"],
    credential: true,
}))

// routes
const bookRoutes = require("./src/books/book.route")
app.use("/api/books", bookRoutes)

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