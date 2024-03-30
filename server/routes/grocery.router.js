const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET

router.get('/', (req, res) => {
    console.log("In GET request");
    let queryText = 'SELECT * from "groceryList" ORDER BY "name" ASC;';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.error(error);
        res.sendStatus(500);
    })
});

// POST

router.post('/', (req, res) => {
    console.log('POST req.body', req.body);
    let queryText = 'INSERT INTO "groceryList" ("name", "displayimage", "unit", "quantity") VALUES ($1, $2, $3, $4);';
    pool.query(queryText, [req.body.name, req.body.displayimage, req.body.unit, req.body.quantity]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.error(error);
        res.sendStatus(500)
    });
});

// PUT

// RESET PUT

// DELETE

// CLEAR DELETE


module.exports = router;