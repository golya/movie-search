import express from 'express';
import cors from "cors";

import { container, TOKENS } from '@/server/container'

const app = express();

app.use(cors());

app.get('/api/v1/movies', async (req, res) => {
  const title = String(req.query.query);
  const page = Number(req.query.page);
  const movieService = container.get(TOKENS.movieService);
  const data = await movieService.searchMovie(title, page);
  return res.status(200).json(data);
})

app.listen(5001, () => console.log('App listening on port 5001!'));