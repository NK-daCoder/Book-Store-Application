const express =  require('express');
const User = require('./users.model');
const jwt = require('jsonwebtoken');

const router =  express.Router();

const JWT_SECRET = process.env.JWT_SECRET_KEY

router.post("/admin", async (req, res) => {
    const {username, password} = req.body;
    try {
        // trying to find a username that correspondse to the username in the database
        const admin =  await User.findOne({username});
        console.log("found admin: " + admin);

        if(!admin) {
            res.status(404).send({message: "Admin not found!"})
        }
        if(admin.password !== password) {
            res.status(401).send({message: "Invalid password!"})
        }
        
        const token =  jwt.sign(
            {id: admin._id, username: admin.username, role: admin.role}, 
            JWT_SECRET,
            {expiresIn: "1h"}
        )

        return res.status(200).json({
            message: "Authentication successful",
            token: token,
            user: {
                username: admin.username,
                role: admin.role
            }
        })
        
    } catch (error) {
       console.error("Failed to login as admin", error)
       res.status(401).send({message: "Failed to login as admin"}) 
    }
})

module.exports = router;