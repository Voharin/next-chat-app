import { Pool } from "pg";

const poll = new Pool({
    host: process.env.PQSQL_HOST,
    port: 32768,
    user: 'postgres',
    password: 'postgrespw',
    database: 'chatDB',
    
});

poll.connect((err) => {
    if (err) {
        console.error("connection error", err.stack);
    } else {
        console.log("connected"); 
    }
},
    );

// Path: lib/db.js

export default poll;
