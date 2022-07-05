const express = require('express');
const fs = require('fs');
const router = express.Router();


router.get('/', (_req, res) => {
  const presetData = JSON.parse(fs.readFileSync('data/presets.json'));
  res.json(presetData.map(canvas => {
    return {
      name: canvas.name,
      id: canvas.id
    }
  }))
});

router.get('/:id', (req, res) => {
  const presetData = JSON.parse(fs.readFileSync('data/presets.json'));
  const id = req.params.id;
  const selectedPreset = presetData.find(canvas => canvas.id === id);
  if (selectedPreset) {
    res.json(selectedPreset.grid);
  } else {
    res.status(404).send(`Canvas with id: ${id} not found`);
  };
});

module.exports = router;