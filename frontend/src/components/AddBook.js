import axios from "axios";
import { useState } from "react";

const AddBook = () => {

    const [name, setName] = useState('')
    const [excerpt, setExcerpt] = useState('')
    const [author, setAuthor] = useState('')
    const [rating, setRating] = useState('')
    const [date, setDate] = useState('')
    const [publishid, setPublishID] = useState('')
    const [image, setImage] = useState('')
    const [genre, setGenre] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const bookData = {
            name: name,
            excerpt: excerpt,
            author: author,
            rating: rating,
            publishdate: date,
            publishid: publishid,
            image: image,
            genre: genre
        }

        const addBook = await axios.post('/addbook', bookData)
        console.log(addBook)
    }

  return (
    <form>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Excerpt
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => setExcerpt(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Author
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Rating
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Date
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Publish ID
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => setPublishID(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Image
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Genre
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>
        Submit
      </button>
    </form>
  );
};

export default AddBook;
