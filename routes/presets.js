const express = require('express');
const fs = require('fs');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');


router.get('/', (_req, res) => {
  const presetData = JSON.parse(fs.readFileSync('data/presets.json'));
  res.json(presetData.map(canvas => {
    return {
      name: canvas.name,
      id: uuidv4()
    }
  }))
});

module.exports = router;