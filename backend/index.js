const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json()); //req.body


//DB ROUTES

//get login
app.get("/login/:admin", async (req, res) => {
    try {
        const { inputId } = req.params;
        const { inputPass } = req.params;
        const todo = await pool.query("SELECT * FROM tblUser where userID = '$1' AND password = '$2'", [inputId, inputPass]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//Get All Projects
app.get("/login/admin", async (req, res) => {
    try {
        const allProjects = await pool.query("SELECT * FROM tblProjects");
        res.json(allProjects.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//Get 1 project
app.get("/login/admin/:id", async (req, res) => {
    try {
        const { inputId } = req.params;
        const { inputPass } = req.params;
        const project = await pool.query("SELECT * FROM tblUser where userID = '$1' AND password = '$2'", [inputId, inputPass]);

        res.json(project.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//Put 1 project


//Delete 1 project



app.listen(5000, () => {
    console.log("server has started on port 5000");
})