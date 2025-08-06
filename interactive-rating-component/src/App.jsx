import Ratebox from './Ratebox'
import MessageSucces from './MessageSucces'
import { useState } from 'react'
import './App.css'

function App() {
  
  const [rating, setRating] = useState(0); 
  return (
    rating ? <MessageSucces rating={rating} /> : <Ratebox onSelect={setRating}/>
  )
}

export default App
