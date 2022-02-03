import { Request, Response } from 'express';
import client from '../utils/db';

export interface TransactionType {
    userId: string;
    amount: number;
    deposit: boolean;
}

export default function addTrnasaction(req: Request, res: Response) {
    let { userId, amount, deposit } = req.body;
    client
        .query(
            `INSERT INTO transactions (userId, amount, deposit) VALUES ($1, $2, $3) RETURNING *;`,
            [userId, amount, deposit],
        )
        .then((result) => {
            res.status(200).json({
                message: 'new transaction added.',
                status: result.rowCount,
                data: { userId, amount, deposit },
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: 'Somthing unpredictable happened.' });
        });
}
