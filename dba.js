import { createConnection } from 'mysql2';
import {createPool}from 'mysql2'
export const connection = createConnection({
    host:'localhost',
    user:'root',
    password: 'root123',
    port:3306,
    database: 'companydb'
})
connection.connect(function(err){
    if(err)
    {
        console.log(err)
    }else{
        console.log("connected")
    }
});
connection.query('SELECT * from employee', function (error,results,fields){
    if (error)
    throw error;

    results.forEach(result => {
        console.log(result);
        
    });
})