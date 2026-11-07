import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/species' element={<Species />} />
          <Route path='/locations' element={<Locations />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Home() {
  return <h1>Welcome to the Rick and Morty React App homepage!</h1>;
}

function Characters() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5001/api/characters')
      .then((res) => setApiData(res.data))
      .catch((error) => console.log(error));
  }, []);

  return apiData.map((data) => (
    <div className='chars' key={`${data.name} + ${Math.random()}`}>
      <div className='card'>
        <img src={data.image} alt={`Image of ${data.name}`}></img>
        <h1>{data.name}</h1>
        <p>{data.species}</p>
        <p>{data.status}</p>
      </div>
    </div>
  ));
}

function Species() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5001/api/species')
      .then((res) => setApiData(res.data))
      .catch((error) => console.log(error));
  }, []);

  return apiData.map((data) => {
    return (
      <div className='species' key={data.species}>
        <div className='species-card'>
          <h1>Species: {data.species}</h1>
          <p>Number: {data.count}</p>
          <ul>
            {data.characters.map((c) => {
              return <p>{c}</p>;
            })}
          </ul>
        </div>
      </div>
    );
  });
}

function Locations() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5001/api/locations')
      .then((res) => setApiData(res.data))
      .catch((error) => console.log(error));
  }, []);

  return apiData.map((data) => {
    return (
      <div className='locations' key={data.loc}>
        <div className='loc-card'>
          <h1>{data.loc}</h1>
          <p>Count: {data.count}</p>
        </div>
      </div>
    );
  });
}

export default App;
