const bodyParser = require('body-parser');
const express = require('express');
var cors = require('cors');
const app = express();
const port = 3080;
const pin = "13846729556";

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(process.cwd() + '/api_no_time/dist'));


app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/api_no_time/dist/index.html');
});


app.post('/login', async(req, res) => {
    let tried = req.body.pin;

    if (typeof tried !== "string") {
        return res.status(400).send({ "message": "pin should be of type string" });
    }

    if (tried.length !== pin.length) {
        return res.status(400).send({ "message": "pin length is not correct" });
    } else {
        let i = 0;
        let correct = true;

        while (i < pin.length && correct) {
            if (tried[i] !== pin[i]) {
                correct = false;
                return res.status(200).send({ "message": "wrong pin" });
            } else {
                await new Promise(resolve => setTimeout(resolve, 100));
                i += 1;
            }

        }
    }

    return res.send({ "message": "login successful", "flag": "Ephc{Fl1p_Th3_h0Urgl4sS}" })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});