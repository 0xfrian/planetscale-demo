import * as mysql from "mysql2";
import * as dotenv from "dotenv";
dotenv.config()
import Connection from "mysql2/typings/mysql/lib/Connection";

const database_name: string = "thecoreloop_database";
const database_url: string = `mysql://`
  + `${process.env.USERNAME}:${process.env.PASSWORD}`
  + `@us-west.connect.psdb.cloud/${database_name}?ssl={"rejectUnauthorized":true}`;

// Question:  
//    createConnection() isn't async, how do I wait until it 
//    finishes creating the connection before moving forward? 
console.log("Connecting to PlanetScale...");
const connection: Connection = mysql.createConnection(database_url);
console.log("Connection: ", connection);


