import { Client } from 'pg';

const client = new Client({
    user: 'pgdmn',
    password: 'secret',
    host: '192.168.101.8',
    database: 'nivo',
    port: 5234,
});

export default client;
