const express=require('express')
const cors=require('cors')
// const con=require('./dbConnection')

const app=express()
const port=4000

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

// app.get('/users', async (req, res)=>{
//     try {
//         con.query('SELECT * FROM users', (err, result)=>{
//             if(err){
//                 return res.status(500).json({
//                     message: 'Failed to select users',
//                     serverError: err
//                 })
//             }
//             return res.status(200).json({
//                 message: 'Users Datas',
//                 usersData: result
//             })
//         })
//     } catch (error) {
//         return res.status(500).json({
//             message: 'Internal Server Error',
//             serverError: error
//         })
//     }
// })

// //find user by full name
// app.get('/search', async (req, res)=>{
//     const { q } = req.query
//     if(!q){
//         return res.status(400).json({
//             message: 'Query is required',
//         })
//     }
//     try {
//         con.query(`SELECT * FROM users WHERE fname LIKE '%${q}%'`, (err, result)=>{
//             if(err){
//                 return res.status(500).json({
//                     message: 'Failed to search users',
//                     serverError: err.message
//                 })
//             }
//             return res.status(200).json({
//                 message: 'Searched Users',
//                 query: result
//             })
//         })
//     }
//     catch(err){
//         return res.status(500).json({
//             message: 'Internal Server Error',
//             serverError: err.message
//         })
//     }
// })

// app.post('/create-user', async (req, res)=>{
//     const { fname, email, age, isActive } =req.body
//     if(!fname && !email && !age && !isActive){
//         return res.status(400).json({
//             message: 'All fields are required'
//         })
//     }
//     try {
//        con.query(`INSERT INTO users VALUES(NULL, '${fname}', '${email}', '${age}', '${isActive}')`, (err)=>{
//         if(err){
//             return res.status(500).json({
//                 message: 'Failed to create new user',
//                 serverError: err.message
//             })
//         }
//         return res.status(201).json({
//             message: 'User created!'
//         })
//        }) 
//     } catch (error) {
//         return res.status(500).json({
//             message: 'Internal server Error',
//             serverError: error.message
//         })
//     }
// })

// app.patch('/update-status/:id', async (req, res)=>{
//     const { id } = req.params
//     const { status } = req.query
//     try {
//        con.query(`UPDATE users SET status='${status}' WHERE id = ${id}`, (err, result)=>{
//            if (err) return res.status(500).json({
//                message: 'Failed to update status',
//                serverError: err.message
//            })
//            return res.status(200).json({
//                message: 'User status updated!'
//            })
//        })
//     }
//     catch(err){
//         return res.status(500).json({
//             message: 'Internal server Error',
//             serverError: err.message
//         })
//     }
// })

// app.patch('/update-age/:id', async (req, res)=>{
//     const { id } = req.params
//     const { age } = req.query
//     try {
//         con.query(`UPDATE users SET age='${age}' WHERE id = ${id}`, (err, result)=>{
//             if (err) return res.status(500).json({
//                 message: 'Failed to update age',
//                 serverError: err.message
//             })
//             return res.status(200).json({
//                 message: 'User age updated!'
//             })
//         })
//     }
//     catch(err){
//         return res.status(500).json({
//             message: 'Internal server Error',
//             serverError: err.message
//         })
//     }
// })

// app.delete('/delete-user/:id', async (req, res)=>{
//     const { id } = req.params
//     try {
//         con.query(`DELETE FROM users WHERE id = ${id}`, (err)=>{
//             if (err) return res.status(500).json({
//                 message: 'Failed to delete user',
//                 serverError: err.message
//             })
//             return res.status(200).json({
//                 message: 'User deleted successfully',
//             })
//         })
//     }
//     catch (err) {
//         return res.status(500).json({
//             message: 'Internal server Error',
//             serverError: err.message
//         })
//     }
// })

// app.put('/update-user/:id', async (req, res)=>{
//     const { id } = req.params
//     const { fname, email } = req.body
//     if(!fname && !email){
//         return res.status(400).json({
//             message: 'All fields are required'
//         })
//     }
//     try {
//         con.query(`UPDATE users SET fname='${fname}', email='${email}' WHERE id = ${id} `, (err)=>{
//             if (err) return res.status(500).json({
//                 message: 'Failed to update user',
//                 serverError: err.message
//             })
//             return res.status(200).json({
//                 message: 'User updated!'
//             })
//         })
//     }
//     catch(err){
//         return res.status(500).json({
//             message: 'Internal server Error',
//             serverError: err.message
//         })
//     }
// })
app.use((req,res)=>{
    res.status(404).json({
        message: 'Route Not found',
        routeName: req.path
    })
})


//starting server
app.listen(port, ()=>{
    console.log(`Server is running port ${port}`)
})
