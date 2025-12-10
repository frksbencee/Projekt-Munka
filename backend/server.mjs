import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
let app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

let db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "singsingmusichall",
});

db.connect(err => {
    if (err) throw err;
    console.log("Connected to MYSql")
});

app.post("/api/contact", (req, res) =>{
    let { fname, lname, email, pnumber, message} = req.body

    let sql = `
        INSERT INTO messages (fname, lname, email, pnumber, message)
        VALUES (?, ?, ?, ?, ?, NOW())
    `;

    db.query(sql, [fname, lname, email, pnumber, message], (err,result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({error: "Database error"});
        }    
        res.json({ success: true })
    }
)});

app.get("/api/messages", (req,res) => {
    let sql = `
    SELECT id, fname, lname, email, pnumber, message
    FROM messages
    `;

    db.query(sql, (err,result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({error: "Database error"});
        }    
        res.json(result)
    }
)});

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

// MEGKELL CSINÁLNI MÉG ---> VALAMI FURA PORT ERROR KÓDOT ÍR KI