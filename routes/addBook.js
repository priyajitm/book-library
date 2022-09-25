import { Router } from "express";
import Book from '../models/Book.js'


const router = Router()

router.post('/', async (req, res) => {
    try {
        const { name, excerpt, author, genre, publishdate, rating, publishid, image } = req.body

        const book = await Book.findOne({publishID: publishid})

        if (book) {
            res.status(200).send({msg: 'Book already Exists'})
        } else {
            const bookData = new Book ({
                id: publishid,
                name: name,
                excerpt: excerpt,
                author: author,
                genre: genre,
                publishDate: publishdate,
                rating: rating, 
                image: image
            })

            await bookData.save()
            res.status(201).send({msg: 'Book Added in Library'})
        }
        
    } catch (err) {
        console.log(err)
        res.status(500).send({msg: 'Database Connection Error'})
    }
})

export default router