import path from 'path';
import express from 'express';
import cors from 'cors';

import router from './router';

const app = express();

const assets = express.static(path.join(__dirname, '../'));
// const indexPath = path.join(__dirname, '../index.html');

app.use(cors());
app.use(assets);

// app.get('/', (req, res) => {
//     res.sendFile(indexPath);
// })

app.get("*", router);

export default app;