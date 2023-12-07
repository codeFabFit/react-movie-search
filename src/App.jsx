import { useState } from 'react'
import Form from '../components/form';
import MovieDisplay from '../components/MovieDisplay';



function App() {
  const apiKey = "98e3fb1f";
 const [movie, setMovie] = useState(null)

  const getMovie = async (searchTerm) => {
  // make fetch request and stores data
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`,
        
    );
    const data = await response.json();
      setMovie(data)
      console.log(data)
  };

  return (
    <>
    <h1>React Movie Search</h1>
    <Form movieSearch ={getMovie}/>
    <MovieDisplay movie={movie}/>
      </>
  );
}

export default App
