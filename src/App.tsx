import React, { useState } from 'react';
import { Films, Film } from './Types';


const App = () => {
  const [newFilm, setNewFilm] = useState({
    name: '',
    year: '',
    director: ''
  });
  const [filmList, setFilmList] = useState([] as Films);

  // const onNewFilmChange = useCallback((event) => {
  //   setNewFilm(event.target.value);
  // }, []);
  const handleChange = (evt: any) => {
      const value = evt.target.value;
      setNewFilm({
        ...newFilm,
        [evt.target.name]: value
      });
    }

  const formSubmitted = (evt:any) => {
    evt.preventDefault();
    setFilmList([
      ...filmList,
      {
        id: filmList.length + 1,
        name: newFilm.name,
        year: newFilm.year,
        director: newFilm.director
      } 
    ]);
    setNewFilm({
      name: '',
      year: '',
      director: ''

    })
    
    
  }

  const deleteFilm = (Films: Film) => (evt:any) => { 
      setFilmList(filmList.filter(f => f.id !== Films.id))
   }
  console.log(filmList)
  return (
    <div>
      <form onSubmit={formSubmitted}>
        <label htmlFor="newFilm">Enter film name: </label> 
        <input 
          name="name"
          type='text'
          value={newFilm.name} 
          onChange={handleChange}
        /> <br />

        <label htmlFor="newFilm">Enter year of film: </label> 
        <input
          name="year"
          type='text'
          value={newFilm.year} 
          onChange={handleChange}
        /> <br />

        <label htmlFor="newFilm">Enter directors name: </label> 
        <input 
          name="director"
          type='text'
          value={newFilm.director} 
          onChange={handleChange}/> <br />

        <button>Add Film</button>
      </form>
      <ul>
        {filmList.map((Films) => (<div>
        <li key ={Films.id}>{Films.name} <br /> {Films.year} <br/> {Films.director}</li>
        <button onClick={deleteFilm(Films)}>Delete</button>
        </div>
        ))}
      </ul>
    </div>
  )
}




export default App;
