var motoGP = [
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

let result = {};

for (let i = 0; i < motoGP.length; i++) {
  let country = motoGP[i].winner.country;
  let name = motoGP[i].winner.firstName + " " + motoGP[i].winner.lastName;
  let winCircuit = motoGP[i].circuit;
  let winLocation = motoGP[i].location;

  if (!result[country]) {
    result[country] = {
      winningCircuits: [],
      totalWin: 0
    };
  }


result[country].winningCircuits.push({
    name: name,
    winLocation: `${winCircuit}, ${winLocation}`
  });
  result[country].totalWin++;
}

console.log("{");
for (let country in result) {
  console.log(`  ${country}: {`);
  console.log(`    winningCircuits: [`);
  result[country].winningCircuits.forEach((winner, index) => {
    let comma = index === result[country].winningCircuits.length - 1 ? "" : ",";
    console.log(`      { name: '${winner.name}', winLocation: '${winner.winLocation}' }${comma}`);
  });
  console.log("    ],");
  console.log(`    totalWin: ${result[country].totalWin}`);
  console.log("  },");
}

console.log("}");
