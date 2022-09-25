import mongoose from "mongoose";

const Book = new mongoose.Schema({
    name: String,
    excerpt: String,
    author: String,
    genre: String,
    publishDate: Date,
    rating: Number,
    publishID: String,
    isAvailable: {
        type: Boolean,
        default: true
    },
    image: String,
    addedOn: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('books', Book)