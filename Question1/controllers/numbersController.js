// controllers/numbersController.js
const express = require('express');
const router = express.Router();
const { getNumbers } = require('../services/numberService');

router.get('/:numberid', async (req, res) => {
  const { numberid } = req.params;

  console.log("Number recieved: ",numberid);

  if (!['p', 'f', 'e', 'r'].includes(numberid)) {
    return res.status(400).json({ error: 'Invalid number type. Use p, f, e, or r.' });
  }

  try {
    const result = await getNumbers(numberid.trim().toLowerCase());
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
