const mysql=require('mysql2')
const con=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ums'
})

con.connect(err=>{
    if(err) throw err
    return console.log('Database connected successfully!')
})

module.exports=con