import cors from 'cors';
import express from 'express';
const app = express();

app.use(express.json());
app.use(cors());

let PORT = '5000';

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});
