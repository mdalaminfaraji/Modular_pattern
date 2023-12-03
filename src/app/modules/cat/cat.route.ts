import express from 'express';
import { createCatController, getAllCatController } from './cat.controller';
const router = express.Router();
router.post('/create-cat', createCatController);
router.get('/get-cat', getAllCatController);
export const catRoutes = router;
