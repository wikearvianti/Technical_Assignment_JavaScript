/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE

TypeError      : telah terjadi kesalahan tipe
                 TypeError muncul jika menggunakan nilai yang berada di luar kisaran tipe yang diharapkan

ReferenceError : Referensi ilegal telah terjadi
                 ReferenceError dilempar jika menggunakan (referensi) variabel yang belum dideklarasikan.

RangeError     : Telah terjadi angka “di luar jangkauan”
                 RangeError dilemparkan jika menggunakan angka yang berada di luar rentang nilai legal.

SyntaxError    : Terjadi kesalahan sintaks
                 SyntaxError muncul jika mencoba mengevaluasi kode dengan kesalahan sintaks


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;

- Terjadi Error
- Termasuk dalam kategori ReferenceError
- Karena variabelnya belum dideklarasikan