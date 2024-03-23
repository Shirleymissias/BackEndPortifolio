import mysql from 'mysql2/promise';

export const connection = await mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'portfolio',
    password:'Dg@2024'
})
