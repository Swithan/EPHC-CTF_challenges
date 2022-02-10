const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.send('EPHC{T1mE_tRaV3lLer}');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/Ctf/here`)
});