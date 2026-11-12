const express = require('express');
const app = express();
const PORT = 5001;
const REACT_PORT = 5173;

const cors = require('cors'); // Allows frontend to fetch from backend
const corsOptions = {
  origin: [`http://localhost:${REACT_PORT}`], // Specify where to accept requests from
};

app.use(cors(corsOptions));

app.get('/api/characters', (req, res) => {
  const arr = Array.from({ length: 100 }, (_, index) => index + 1);
  const num = arr.join(',');
  const url = `https://rickandmortyapi.com/api/character/${num}`;

  fetch(url, {})
    .then((response) => {
      if (!response.ok) {
        res.status(500).send(`error: ${response.status}`)
      }
      return response.json();
    })
    .then((data) => {
      const chars = [];
      data.forEach((obj) => {
        chars.push({
          name: obj.name,
          image: obj.image,
          species: obj.species,
          status: obj.status,
        });
      });
      res.send(chars);
    })
    .catch((error) => console.log('Error: ', error.message));
});

app.get('/api/species', (req, res) => {
  const arr = Array.from({ length: 100 }, (_, index) => index + 1);
  const num = arr.join(',');
  const url = `https://rickandmortyapi.com/api/character/${num}`;

  fetch(url, {})
    .then((response) => {
      if (!response.ok) {
        res.status(500).send(`error: ${response.status}`)
      }
      return response.json();
    })
    .then((data) => {
      const species = [];
      data.forEach((obj) => {
        species.push({
          name: obj.name,
          image: obj.image,
          species: obj.species,
          status: obj.status,
        });
      });
      res.send(findSpeciesCount(species));
    })
    .catch((error) => console.log('Error: ', error.message));
});

app.get('/api/locations', (req, res) => {
  const arr = Array.from({ length: 100 }, (_, index) => index + 1);
  const num = arr.join(',');
  const url = `https://rickandmortyapi.com/api/character/${num}`;

  fetch(url, {})
    .then((response) => {
      if (!response.ok) {
        res.status(500).send(`error: ${response.status}`)
      }
      return response.json();
    })
    .then((data) => {
      const locations = [];
      data.forEach((obj) => {
        locations.push({
          location: obj.location,
        });
      });
      const locationCount = findLocationCount(locations)
      console.log(locationCount);
      res.send(locationCount);
    })
    .catch((error) => console.log('Error: ', error.message));
});

const findSpeciesCount = function findTotalCountOfSpecies(arr) {
  const speciesList = [];

  arr.forEach((obj) => {
    if (speciesList.find((elem) => elem.species === obj.species)) {
      let index = speciesList.findIndex((elem) => elem.species === obj.species);
      speciesList[index].count += 1;
      speciesList[index].characters.push(obj.name);
    } else {
      speciesList.push({
        species: obj.species,
        count: 1,
        characters: [obj.name],
      });
    }
  });
  return speciesList;
};

const findLocationCount = function findTotalCountOfLocations(arr) {
  const locations = [];

  arr.forEach((obj) => {
    if (locations.find((elem) => elem.loc === obj.location.name)) {
      let index = locations.findIndex((elem) => elem.loc === obj.location.name);
      locations[index].count += 1;
    } else {
      locations.push({ loc: obj.location.name, count: 1 });
    }
  });
  return locations;
};

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
