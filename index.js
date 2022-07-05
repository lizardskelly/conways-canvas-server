const express = require('express');
const app = express();
const presetRoute = require('./routes/presets');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());

app.use('/presets', presetRoute);

app.listen(port, () => console.log(`Server is listening on ${port}`));