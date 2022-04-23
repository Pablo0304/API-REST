import { createPool } from "mysql2/promise";

export async function connect(){
    const connection = await createPool({
        host: 'bwucpr7t2uxo7l6fwoqe-mysql.services.clever-cloud.com',
        user:'uasoxqxhywlas9ar',
        database: 'bwucpr7t2uxo7l6fwoqe',
        password: '4iRqfC3OMV1yHeeRkljy',
        connectionLimit: 10
    })
    return connection;
}