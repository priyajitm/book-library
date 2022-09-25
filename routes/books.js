import { Router } from "express";
import Book from '../models/Book.js'


const router = Router()

router.get('/', async (req, res) => {
    try {
        
            const books = await Book.find()
            console.log(books)
            res.status(201).json({data: books})
        
    } catch (err) {
        console.log(err)
        res.status(500).send({msg: 'Database Connection Error'})
    }
})

export default router