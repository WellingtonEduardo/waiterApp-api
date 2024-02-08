import express from 'express';
import http from 'node:http';
import path from 'node:path';
import mongoose from 'mongoose';
import { Server } from 'socket.io';

import { router } from './router';
import { cors } from './middlewares/cors';


const app = express();
const server = http.createServer(app);
export const io = new Server(server);


mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const port = 3001;

    app.use(cors);
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);
    server.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });
  })
  .catch((error) => console.log('Error connecting', error));

