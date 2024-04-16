const express = require('express');
const app = express();

// Import route files
const userRoutes = require('./routes/users');
const claimRoutes = require('./routes/claims');
const esoasRoutes = require('./routes/esoa');
const idcRoutes = require('./routes/autocompleIcodes');
const icdRoutes = require('./routes/icdCodes');
const rvsRoutes = require('./routes/rvsCodes');

// Use the route files
app.use('/users', userRoutes);
app.use('/claims', claimRoutes);
app.use('/esoas', esoasRoutes);
app.use('/codes', idcRoutes);
app.use('/icdsCodes', icdRoutes);
app.use('/rvsCodes', rvsRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
