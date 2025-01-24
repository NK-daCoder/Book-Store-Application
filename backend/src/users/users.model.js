const mongoose = require("mongoose");
const scrypt = require("scrypt-js");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        required: true,
    }
});

// Use scrypt-js for password hashing
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    try {
        const salt = crypto.randomBytes(16).toString("hex");
        const passwordBuffer = Buffer.from(this.password);
        const saltBuffer = Buffer.from(salt);

        // Scrypt parameters
        const N = 16384; // CPU/memory cost
        const r = 8;     // Block size
        const p = 1;     // Parallelization
        const keyLength = 64; // Output key length

        // Perform scrypt hashing
        const derivedKey = await new Promise((resolve, reject) => {
            scrypt(passwordBuffer, saltBuffer, N, r, p, keyLength, (error, progress, key) => {
                if (error) reject(error);
                if (key) resolve(key);
            });
        });

        this.password = `${salt}:${derivedKey.toString("hex")}`;
        next();
    } catch (err) {
        next(err);
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
