import express from 'express';
import { router } from './utils/routes'

const api = express();

api.use(express.json());
api.use(router)


api.listen(1200, ()=> console.log("Server Runnig on port:1200 🚀"))