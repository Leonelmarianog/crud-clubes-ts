import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
