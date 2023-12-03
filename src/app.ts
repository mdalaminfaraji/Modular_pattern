import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { catRoutes } from './app/modules/cat/cat.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// Application route

app.use('/api/v1/cat/', catRoutes);

app.get('/', (req: Request, res: Response) => {
  const a = 10;

  res.send({ a });
});

export default app;
