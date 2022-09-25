import { useState } from 'react';
import './App.css';
import AddBook from './components/AddBook';
import Card from './components/Card';
import CardContainer from './components/CardContainer';
import CardDetails from './components/CardDetails';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Register from './components/Register';

const App = () => {

  const [showAdd, setShowAdd] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [selectedBook, setSelectedBook] = useState('')

  const handleAddBook = () => {
    setShowAdd(true)
  }

  const showBook = (book) => {
    setSelectedBook(book)
    setShowDetails(true)
  }

  return (
    <>
     {/* <Navigation handleClick={handleAddBook}/> */}

    {/* {!showAdd && !showDetails && <> <Hero/> <CardContainer selectedBook={showBook}/> </>}
    
   { showAdd && <AddBook /> }

   {showDetails && <CardDetails bookData={selectedBook}/>} */}

   <Register />
    
    
   </>
  )
}

export default App;
