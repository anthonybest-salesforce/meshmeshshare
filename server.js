const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'expedia-meshmesh-proposal.html'));
});

app.get('/project-plan', (req, res) => {
  res.sendFile(path.join(__dirname, 'expedia-project-plan.html'));
});

app.listen(PORT, () => {
  console.log(`MeshMesh proposal server running on port ${PORT}`);
});
