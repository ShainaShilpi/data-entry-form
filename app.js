const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/submit', (req, res) => {
    const formData = req.body;
    console.log(formData);

    res.send('Form submitted successfully!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});