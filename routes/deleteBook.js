import { Router } from "express";
import Book from '../models/Book.js'


const router = Router()

router.post('/:bookid', async (req, res) => {
    try {
            const id = req.params.bookid
            const book = await Book.findByIdAndRemove(id)

            if (book) {
                res.status(200).send({msg: 'Book Deleted'})
            } else {
                res.status(404).send({msg: 'Book Not Found'})
            }
            
    } catch (err) {
        console.log(err)
        res.status(500).send({msg: 'Database Connection Error'})
    }
})

export default router