import express from 'express';
import addTrnasaction from '../controls/transaction.controller';

const router = express.Router();

router.post('/', addTrnasaction);

export default router;
