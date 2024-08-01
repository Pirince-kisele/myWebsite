const express = require('express');
const { env } = require('process');
const app = express();
const port = process.env.Port || 3000;

app.use(express.static.public)
app.use(express.json())


app.get('/', (req, res) => res.send('Hello World!'));
