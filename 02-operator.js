/// Soal - 01
/// Dibawah ini akan ditampilkan daftar pengeluaran bulan ini beserta gaji yang akan diterima, tugas-mu adalah untuk menghitung gaji yang tersisa

/// Pegeluaran
/// gundam = 750000
/// makan = 2000000
/// kost = 1000000
/// subscription = 250000

/// Gaji
/// gajiPokok = 5000000
/// gajiBonus = 10% dari gajiPokok
/// gajiLembur = 5% dari gajiPokok

/// Sisa Gaji
const sisaGaji;

let gundam = 750000;
let makan = 2000000;
let kost = 1000000;
let subscription = 250000;
let gajiPokok = 5000000;
let gajiBonus = 0.1*gajiPokok;
let gajiLembur = 0.05*gajiPokok;
let pengeluaran = gundam+makan+kost+subscription;
let pemasukan = gajiPokok+gajiBonus+gajiLembur;
let sisaGaji = pemasukan-pengeluaran;
console.log(sisaGaji);

/// Soal - 02
/// Gunakan operator yang tepat untuk mengetahui apakah 2 variable dibawah ini memiliki nilai yang sama (tipe data tidak termasuk)
const oneInString = "1";
const oneInNumber = 1;
const isSame;

let oneInString = "1"; 
let oneInNumber = 1; 
console.log(oneInString==oneInNumber);

/// Soal - 03
/// Gunakan operator yang tepat untuk mengetahui apakah studentA memiliki nilai yang lebih tinggi atau sama dengan studentB
const studentA = 75;
const studentB = 80;
const isHigher;

let studentA = 75;
let studentB = 80;;
console.log((studentA>studentB)||(studentA==studentB));

/// Soal - 04
/// Gunakan operator yang tepat untuk membedakan 2 buah variable yang terdapat pada soal-02 berdasarkan value-nya (tipe data juga dihitung)
const final;

let oneInString = "1";
let  oneInNumber = 1;
console.log(oneInString===oneInNumber);