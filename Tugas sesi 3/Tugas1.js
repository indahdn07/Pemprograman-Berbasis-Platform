const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function agent(detective) {
  return new Promise((mafia) => rl.question(detective, mafia))
}

async function analisis() {
  const nama = await agent("Masukkan nama: ");
  const umur = Number(await agent("Masukkan data umur: "));
  const tempat = (await agent("Masukan zona tempat tinggal: ")).toLowerCase();
  const tabungan = Number(await agent("Masukan jumlah kekayaan: "));
  
  if (
    umur > 40 && ["nevada", "new york", "havana"].includes(tempat) && tabungan > 10000000
  ){
    console.log(`${nama} kemungkinan adalah anggota mafia dengan pangkat Don.`);
  }
  else if (
    umur >= 25 && umur <= 40 && ["new jersey", "manhattan", "nevada"].includes(tempat)
    && tabungan >= 1000000 && tabungan <= 2000000
  ){
    console.log(`${nama} kemungkinan adalah anggota mafia dengan pangkat Underboss.`);
  }
  else if (
    umur >= 18 && umur <= 24 && ["california", "detroit", "boston"].includes(tempat) && tabungan < 1000000 
  ){
    console.log(`${nama} kemungkinan adalah anggota mafia dengan pangkat Capo.`);
  }
  else{
    console.log(`${nama} tidak mencurigakan`);
  }
  rl.close();
  process.exit(0);
}

analisis();