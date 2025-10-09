const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function nilai(penilaian) {
  return new Promise((penerimaan) => rl.question (penilaian, penerimaan));
}

async function hitung() {
  const nilaiTest = Number(await nilai("Masukkan nilai hasil peserta: "));
  const nilaiInterview = (await nilai("Masukkan nilai hasil interview peserta: ")).toUpperCase();

  let hasilTest = ""
  if (
    nilaiTest > 80
  ){
    hasilTest = "LOLOS"
  }
  else if (
    nilaiTest >= 60 && nilaiTest <= 80
  ){
    hasilTest = "DIPERTIMBANGKAN"
  }
  else {
    hasilTest = "GAGAL"
  }

  let hasilInterview = "";
  if (nilaiInterview === "A" || nilaiInterview === "B") {
    hasilInterview = "LOLOS";
  } else {
    hasilInterview = "GAGAL";
  }

  console.log("Hasil Analisis Penerimaan Calon Programmer:");
  console.log(`Status Test Coding: ${hasilTest}`);
  console.log(`Status Interview: ${hasilInterview}`);

  if (
    (hasilTest === "LOLOS" || hasilTest === "DIPERTIMBANGKAN") &&
    hasilInterview === "LOLOS"
  ) {
    console.log(" Selamat! Kamu berhasil menjadi Calon Programmer!");
  } else {
    console.log("Maaf, kamu belum berhasil menjadi Calon Programmer.");
  }

  rl.close();
  process.exit(0);
}

hitung();