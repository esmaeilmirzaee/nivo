import express from 'express';
import {
    addTrnasaction,
    getTransactions,
} from '../controls/transaction.controller';

const router = express.Router();

router.post('/', addTrnasaction);
router.get('/', getTransactions);

export default router;
