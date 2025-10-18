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

let winData = {};

for (let i = 0; i < motoGP.length; i++) {
  let country = motoGP[i].winner.country;
  let name = motoGP[i].winner.firstName + " " + motoGP[i].winner.lastName;
  let winCircuit = motoGP[i].circuit;
  let winLocation = motoGP[i].location;

  if (!winData[country]) {
    winData[country] = {
      winningCircuits: [],
      totalWin: 0
    };
  }


winData[country].winningCircuits.push({
    name: name,
    winLocation: `${winCircuit}, ${winLocation}`
  });
  winData[country].totalWin++;
}

console.log("{");
for (let country in winData) {
  console.log(`  ${country}: {`);
  console.log(`    winningCircuits: [`);
  winData[country].winningCircuits.forEach((winner, index) => {
    let comma = index === winData[country].winningCircuits.length - 1 ? "" : ",";
    console.log(`      { name: '${winner.name}', winLocation: '${winner.winLocation}' }${comma}`);
  });
  console.log("    ],");
  console.log(`    totalWin: ${winData[country].totalWin}`);
  console.log("  },");
}

console.log("}");

