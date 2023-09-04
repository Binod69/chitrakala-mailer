require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes/index');

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use('/api/v1', routes);
const PORT = process.env.PORT ?? 3002;

app.listen(PORT, (err) => {
  if (err) {
    console.log(`error connecting to the server: ${err}`);
  } else {
    console.log(`server connected successfully: ${PORT}`);
  }
});
