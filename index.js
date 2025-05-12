import bodyParser from "body-parser";
import express from "express";
import Swal from 'sweetalert2'

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var list = [];

var input = false;

app.get("/", (req, res) => {

    const isEmpty = list.length == 0;




    res.render("index.ejs", {
        "task": list,
        "isEmpty": isEmpty,

    });
})

app.post("/add-task", (req, res) => {
    const taskName = req.body;

    const taskk = req.body.task;

    let isEmpty = false;

    if (taskk.trim().length === 0) {
        isEmpty = true;
    } else {
        list.push(taskName);
    }

    res.redirect("/");
})

app.post("/delete-task", (req, res) => {

    const index = list.findIndex(i => i.task === req.body.task);

    list.splice(index, 1);

    res.redirect("/");
})

app.post("/delete-all-task", (req, res) => {
    list = [];

    res.redirect("/");
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);

});