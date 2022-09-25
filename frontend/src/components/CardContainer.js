import {useEffect, useState} from 'react'
import axios from 'axios'
import Card from "./Card"

const CardContainer = ({selectedBook}) => {

    const [books, setBooks] = useState('')

    const handleClick = (id) => {
      const book = books.filter(book => book._id == id)
      console.log(book)
      selectedBook(book)
    }

    const fetchBooks = async () => {
        const bookData = await axios.get('/books')
        setBooks(bookData.data.data)
    }

    useEffect(() => {
        fetchBooks()   
    }, [])
    
    return (
        
        
        <div className="cards-wrapper">
            {books && books.map(({ image, _id}) => (
                
                    <Card id={_id} image={image} handleClick={handleClick}/>
                
            ))}
        </div>
       
      
    )
}

export default CardContainer