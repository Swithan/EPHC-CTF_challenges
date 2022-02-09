const express = require('express');
const app = express();
const port = 3000;

app.get('/Ctf/here', (req, res) => {
    res.send('Post me UwU  !');
});

app.post('/Ctf/here', (req, res) => {
    res.send("/here/here");
});
app.post('/Ctf/here/here', (req, res) => {
    res.send("/here/here/here");
});
app.post('/Ctf/here/here/here', (req, res) => {
    res.send("/here/here/here/here");
});
app.post('/Ctf/here/here/here/here', (req, res) => {
    res.send("/here/here/here/here/here");
});
app.post('/Ctf/here/here/here/here/here', (req, res) => {
    res.send("/here/here/here/here/here/here");
});
app.post('/Ctf/here/here/here/here/here/here', (req, res) => {
    res.send("/here/here/here/here/here/here/here");
});
app.post('/Ctf/here/here/here/here/here/here/here', (req, res) => {
    res.send("/here/here/here/here/here/here/here/here");
});
app.post('/Ctf/here/here/here/here/here/here/here/here', (req, res) => {
    res.send("/here/here/here/here/here/here/here/here/here");
});
app.post('/Ctf/here/here/here/here/here/here/here/here/here', (req, res) => {
    res.send("/here/here/here/here/here/here/here/here/here/here");
});
app.post('/Ctf/here/here/here/here/here/here/here/here/here/here', (req, res) => {
    res.send("/here/here/here/here/here/here/here/here/here/here/here");
});
app.post('/Ctf/here/here/here/here/here/here/here/here/here/here/here', (req, res) => {
    res.send("Are you Stuck THERE stepbro ?");
});

app.get('/Ctf/there', (req, res) => {
    res.send('   \t\t\t  \t \n' +
        '\t\n' +
        '     \t\t  \t \t\n' +
        '\t\n' +
        '     \t\t    \t\n' +
        '\t\n' +
        '     \t\t \t\t  \n' +
        '\t\n' +
        '     \t\t  \t\t \n' +
        '\t\n' +
        '     \t\t \t\t  \n' +
        '\t\n' +
        '     \t\t    \t\n' +
        '\t\n' +
        '     \t\t  \t\t\t\n' +
        '\t\n' +
        '  \n' +
        '\n' +
        '\n');
});

app.get('/Ctf/flag', (req, res) => {
    res.send('Nah nah nah it is not that easy check the other ones \n /Ctf/RR \n /Ctf/here');
});

app.get('/Ctf/realflag', (req, res) => {
    res.send('goodbye say gonna Never\n' +
        'cry you make gonna Never\n' +
        'you desert and around run gonna Never\n' +
        'down you let gonna Never\n' +
        'up you give gonna Never\n' +
        'you hurt and lie a tell gonna Never\n' +
        'goodbye say gonna Never\n' +
        'cry you make gonna Never\n' +
        'you desert and around run gonna Never\n' +
        'down you let gonna Never\n' +
        'up you give gonna Never\n' +
        'you hurt and lie a tell gonna Never\n' +
        'goodbye say gonna Never\n' +
        'cry you make gonna Never\n' +
        'you desert and around run gonna Never\n' +
        'down you let gonna Never\n' +
        'up you give gonna Never\n' +
        'understand you make Gotta\n' +
        'feeling m\'I how you tell wanna just I\n' +
        'it play gonna re\'we and game the know We\n' +
        'on going been s\'what know both we Inside\n' +
        'it say to shy too re\'you but aching been s\'heart Your\n' +
        'long so for other each known ve\'We\n' +
        ')up you Give(\n' +
        'give gonna never ,give gonna Never\n' +
        'you hurt and lie a tell gonna Never\n' +
        'goodbye say gonna Never\n' +
        'cry you make gonna Never\n' +
        'you desert and around run gonna Never\n' +
        'down you let gonna Never\n' +
        'up you give gonna Never\n' +
        'you hurt and lie a tell gonna Never\n' +
        'goodbye say gonna Never\n' +
        'cry you make gonna Never\n' +
        'you desert and around run gonna Never\n' +
        'down you let gonna Never\n' +
        'up you give gonna Never\n' +
        'see to blind too re\'you me tell t\'Don\n' +
        'feeling m\'I how me ask you if And\n' +
        'it play gonna re\'we and game the know We\n' +
        'on going been s\'what know both we Inside\n' +
        'it say to shy too re\'you but aching been s\'heart Your\n' +
        'long so for other each known ve\'We\n' +
        'you hurt and lie a tell gonna Never\n' +
        'goodbye say gonna Never\n' +
        'cry you make gonna Never\n' +
        'you desert and around run gonna Never\n' +
        'down you let gonna Never\n' +
        'up you give gonna Never\n' +
        'understand you make Gotta\n' +
        'feeling m\'I how you tell wanna just I\n' +
        'guy other any from this get t\'wouldn You\n' +
        'of thinking m\'I what s\'commitment full A\n' +
        'I do so and rules the know You\n' +
        'love to strangers no re\'We');
});

app.get('/Ctf/galflaer', (req, res) => {
    res.send('flag: EPHC{Pu_eV1G_rEv3N}');
});

app.get('/Ctf/RR', (req, res) => {
    res.send('https://youtu.be/dQw4w9WgXcQ');
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}/Ctf/here`)
});