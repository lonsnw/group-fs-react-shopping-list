const express = require('express');
const app = express();
const router = require('./routes/grocery.router.js');
const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// Create your API routes in a separate file
// and plug them in here with `app.use()`
app.use('/api/grocery', router);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});
