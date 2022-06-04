const express = require("express");
const router = express.Router();
const Note= require("../models/signModel");

router.route("/create").post((req, res) =>{
    const fname = req.body.fname;
    const mail = req.body.mail;
    const phone = req.body.phone;
    const pass = req.body.pass;
    const newNote= new Note({
        fname,
        mail,
        phone,
        pass
    });
    newNote.save();
    

})

module.exports = router;

