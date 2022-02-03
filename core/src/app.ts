import cors from 'cors';
import express from 'express';
import transactionRoutes from './routes/transaction.route';
import client from './utils/db';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/transaction', transactionRoutes);

let PORT = '5000';
try {
    client.connect().then(() => {
        console.log(`✅ Connected to database...`);
        app.listen(PORT, () => {
            console.log(`App is listening on ${PORT}`);
        });
    });
} catch (err: any) {
    console.log(`🔥 Unable to connect to database...`);
    console.error(err.message);
}
