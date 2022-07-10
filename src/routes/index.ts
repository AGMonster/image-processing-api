import express from 'express';
import imagesRoute from './api/images';

const routes = express.Router();
routes.use('/api', imagesRoute);

export default routes;
