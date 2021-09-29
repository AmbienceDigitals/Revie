const express = require("express");
const {nanoid} = require('nanoid');
const router = express.Router();

const idLength = 8;

router.get('/', (req,res) => {

    let reviews = req.app.db.get('reviews').value();

    return res.send(reviews);

});

router.get('/:id', (req,res) => {

    let review = req.app.db.get('reviews').find({ 
        id: req.params.id
    }).value();

    if(!review){

        res.sendStatus(404);

        return res.send({
            message: "review cannot be found",
            internal_code: "Invalid id"
        });

    };

    return res.send(review);

});

router.post('/', (req,res) => {

    let review = {
        id:nanoid(idLength),
        ...req.body
    };

    try {

        req.app.db.get("reviews").push(review).write();
        
        return res.sendStatus(201).send("review saved successfully");

    }catch(error){

        return res.sendStatus(500).send(error);
    }
});

router.put('/:id', (req,res) => {

    //find review.
    let review = req.app.db.get("reviews").find({
        id: req.params.id
    }).value();

    if(!review){

        return res.sendStatus(404);

    };

    //update that review.
    try {

        req.app.db.get("reviews").find({
            id:req.params.id
        })
        .assign({ title: title, review: review })
        .write();

        return res.send("review updated");

    } catch(error) {

        res.sendStatus(500);

        return res.send(error);

    };

});

router.delete('/:id', (req,res) => {

    //find review.
    let review = req.app.db.get("reviews").find({
        id:req.params.id
    }).value();

    if(!review){

        return res.sendStatus(404);

    };

    // delete the review.
    try {
        req.app.db.get("reviews").remove({
            id:req.params.id
        })
        .write();

        return res.send("review deleted");

    } catch(error) {

        return res.sendStatus(500);

    }

});

module.exports = router;