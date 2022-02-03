import cors from 'cors';
import express from 'express';
import client from './utils/db';
const app = express();

app.use(express.json());
app.use(cors());

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
