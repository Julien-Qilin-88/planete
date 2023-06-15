import express from 'express';
import * as dotenv from 'dotenv';
import * as middlewares from './app/middlewares.js'
import { router } from './app/router.js'

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static('./public'));

app.use(router)

// J'appelle mon middleware de gestion d'erreur
app.use(middlewares.error)

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}/`);
});
