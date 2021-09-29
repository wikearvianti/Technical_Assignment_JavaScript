/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
- Ada dua variable scope, yaitu variable lokal dan variable global.
- Variable lokal :  variabel yang dideklarasikan di dalam suatu blok bisa berupa function-scoped atau block-scoped.
  Variable global : variabel yang dideklarasikan di luar blok.
- Implementasi dari variable lokal
    function hewan() {
	    var namaHewan = 'ayam';
    }

- Implementasi dari variable global :
      var global = "Haloo"

      var localFunction = function () {
          alert(global);
          global = "Semangat semuanya";
          alert(global);
      };

      localFunction();
      alert(global);

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
///
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}
console.log(printFirstName("Mariah Carey"));

- Yang tampil yaitu "Mariah"