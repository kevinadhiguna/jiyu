import express, { Express, Request, Response } from 'express';
import { config } from 'dotenv';

const app: Express = express();
config();

app.get('/', (req: Request, res: Response) => {
  res.json({
    status: 200,
    message: 'Welcome to API powered by Express.js and TypeScript!',
  });
});

// To-do: port shouldn't be a string(?)
const port: string | number = process.env.PORT || 3303;

app.listen(port, () => {
  console.log(`[server] API is running on port ${port}`);
});
