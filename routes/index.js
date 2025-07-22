// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'SLAlytics Dashboard' });
});

router.get('/sla-calculator', (req, res) => {
  res.render('sla-calculator', { title: 'SLA Calculator' });
});


module.exports = router;
