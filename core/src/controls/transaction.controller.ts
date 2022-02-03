import { Request, Response } from 'express';
import client from '../utils/db';

export interface TransactionType {
    userId: string;
    amount: number;
    deposit: boolean;
}
export interface Transaction {
    id: number;
    description: string;
    type: TransactionType;
    amount: number;
}

export function addTrnasaction(req: Request, res: Response) {
    let { userId, amount, description, type, id } = req.body;
    client
        .query(
            `INSERT INTO transactions (userId, amount, description, type, id) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
            [
                userId,
                amount,
                description,
                type === 'deposit' ? true : false,
                id,
            ],
        )
        .then((result) => {
            res.status(200).json({
                message: 'new transaction added.',
                status: result.rowCount,
                data: { userId, amount, description, type, id },
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: 'Somthing unpredictable happened.' });
        });
}

export function getTransactions(req: Request, res: Response) {
    client
        .query(`SELECT (id, amount, description, type) FROM transactions;`)
        .then((result) => {
            res.status(200).json({
                message: 'new transaction added.',
                status: result.rowCount,
                data: result,
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: 'Somthing unpredictable happened.' });
        });
}
