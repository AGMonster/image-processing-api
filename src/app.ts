import express from 'express';
import routes from './routes/index';
import errorHandler from './middlewares/errorHandler';

const app = express();

const port = 3000;
app.use('/', routes);
app.use(errorHandler);

app.listen(port, function (): void {
  console.log('Listening on port 3000!');
});

export default app;
