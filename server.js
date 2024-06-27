// server.js
const express = require('express');
const app = express();
const port = 3001; // Use a port that is available in the GitHub Actions runner

app.use(express.json());

app.post('/v1/api', (req, res) => {
  console.log(req.body); // Log the request body to verify the data
  res.json({ message: 'API called successfully', data: req.body });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});