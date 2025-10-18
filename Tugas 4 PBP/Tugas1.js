let StudentScore = [
    {
        name : 'Andi' ,
        score : 90 
    },
    {
        name : 'Rudi' ,
        score : 80
    },
    {
        name : 'Dira' ,
        score : 100
    },
]

let nilaiTertinggi = StudentScore [0];
for (let i = 1; i < StudentScore.length; i++){
    if(StudentScore[i].score > nilaiTertinggi.score) {
        nilaiTertinggi = StudentScore[i];
    }
} 

console.log(`Siswa yang memiliki nilai paling tinggi adalah ${nilaiTertinggi.name} dengan nilai ${nilaiTertinggi.score}.`);
