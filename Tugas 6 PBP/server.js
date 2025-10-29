const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());

const motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: {
      firstName: 'Cal',
      lastName: 'Crutchlow',
      country: 'UK'
    }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: {
      firstName: 'Valentino',
      lastName: 'Rossi',
      country: 'Italy'
    }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  }
];

app.get('/', (req, res) => { 
    res.json(motoGP); 
});
app.get('/country', (req, res) => {
  const groupedByCountry = motoGP.reduce((acc, race) => {
    const country = race.winner.country;
    if (!acc[country]) acc[country] = [];
    acc[country].push(race);
    return acc;
  }, {});
  
  res.json(groupedByCountry);
});

app.get('/name', (req, res) => {
  const groupedByName = motoGP.reduce((acc, race) => {
    const name = `${race.winner.firstName} ${race.winner.lastName}`;
    if (!acc[name]) acc[name] = [];
    acc[name].push(race);
    return acc;
  }, {});

  res.json(groupedByName);
});

app.use((req, res) => {
  res.status(400).send('Bad Request');
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

