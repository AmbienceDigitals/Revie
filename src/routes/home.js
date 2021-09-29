const express = require("express");
const router = express.Router();


router.get('/', (req,res) => {

    let message = req.app.db.get('message').value();

    return res.send(message);

});

module.exports = router;