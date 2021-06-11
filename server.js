const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const reservations = [];
const waitingList = [];

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));
app.get('/reservation', (req, res) => res.sendFile(path.join(__dirname, 'reservation.html')));



app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});