const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/instagram-data', async (req, res) => {
    try {
        const response = await fetch('https://www.instagram.com/p/CwN5EnGNWYD/');
        const data = await response.text();
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
