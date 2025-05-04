const express = require('express');
const router = express.Router();
const nameGeneratorController = require('../controllers/nameGenerator');

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Name generation endpoint
router.post('/generate-names', nameGeneratorController.generateBusinessNames);

module.exports = router;