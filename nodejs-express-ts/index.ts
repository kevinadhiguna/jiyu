import express, { Express, Request, Response } from 'express';
import { config } from 'dotenv';

const app: Express = express();
config();

// Set X-Frame-Options header to 'same-origin' for all responses (clickjacking defense)
app.use((req: Request, res: Response, next) => {
  res.setHeader('X-Frame-Options', 'same-origin');
  next();
});
// For more: https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html#defending-with-x-frame-options-response-headers

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
