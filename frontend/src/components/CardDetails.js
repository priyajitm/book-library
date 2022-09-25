const CardDetails = ({bookData}) => {
    const {image, rating, name, author, excerpt} = bookData[0]

    return (
        <div className="details-CardContainer">
            <div className="left-section">
                <img src={image} />
                <button></button>
                <div className="rating">
                    <p>Rate this book</p>
                    <p>{rating}</p>
                </div>
            </div>
            <div className="right-section">
                <p>{name}</p>
                <p>{author}</p>
                <p>{excerpt}</p>
            </div>
        </div>
    )
}

export default CardDetails 