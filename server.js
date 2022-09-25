import express from "express";
import passport from 'passport'
import session from 'express-session'
import passportAuth from './configs/passportConfig.js'
import connectDB from './configs/db.js'

import addBook from './routes/addBook.js'
import addUser from './routes/addUser.js'
import books from './routes/books.js'
import deleteBook from './routes/deleteBook.js'
import deleteUser from './routes/deleteUser.js'
import loginUser from './routes/loginUser.js'
import logoutUser from './routes/logoutUser.js'
// import updateUser from './routes/updateUser.js'
// import dashboard from './routes/userDashboard.js'
// import adminDashboard from './routes/adminDashboard.js'


const app = express()
const PORT = 5000

connectDB()
passportAuth()

app.use(express.json())
app.use(session({ secret: 'secret key', resave: false, saveUninitialized: true}))
app.use(passport.initialize())
app.use(passport.session())

//Routes
app.use('/register', addUser)
app.use('/login', loginUser)
app.use('/logout', logoutUser)
app.use('/books', books)
app.use('/addbook', addBook)
app.use('/delbook', deleteBook)
app.use('/deluser', deleteUser)
//app.use('/updateuser', updateUser)
// app.use('/dashboard', dashboard)
// app.use('/admin', adminDashboard)

app.listen(PORT, (err) => {
    if (err) throw err
    console.log(`Server is running at http://localhost:${PORT}`)
})