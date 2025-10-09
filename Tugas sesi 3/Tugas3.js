const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,    
});

rl.question('Masukkan nomor punggung', (nomor) => {
    if (nomor % 2 === 0) {
        console.log(`Posisi anda adalah sebagai Target Attacker`);
        if (nomor >= 50 && nomor <= 100) {
            console.log(`Pemain ini berhak dipilih menjadi kapten tim`);
        }
    } 
    else {
       console.log(`Posisi anda adalah sebagai Defender`);
         if (nomor > 90 ) { 
            console.log(`Posisi anda adalah sebagai Playmaker `);
         }
         if ( nomor % 3 === 0 && nomor % 5 === 0) {
            console.log(`Posisi anda adalah sebagai keeper`);  
         }
    }
    rl.close();
});
