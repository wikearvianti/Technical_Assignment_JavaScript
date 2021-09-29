/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (let i = 0; i <= 100; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;

/// EDIT HERE
let primeCounter = 0;
let fiftiethPrime = 2;
while (primeCounter<50){
  let flag =0;
    for(let j=2;j<fiftiethPrime;j++){
      if(fiftiethPrime%j==0){
        flag = 1;
      }
    }
    if(flag !=1){
      primeCounter++;
    }
    if(primeCounter==50){
      console.log(fiftiethPrime);
    }
    fiftiethPrime++;
}

/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

/// EDIT HERE
