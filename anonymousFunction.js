// Deklarasi anonnymous function
const foobar = function (param1,param2,dst){
    // function body
}; 

// Pemanggillan function
foobar('abc',123,'etc');

// Deklarasi arrow function
const foobar1 = (param1,param2,dst) => {
    // function body
}

// Pemanggilan function
foobar1('abc',123,'etc');

// Deklarasi arrow function jika langsung
// memberikan return value
const penjumlahan = (bil1,bil2) => bil1 + bil2;

//setara dengan 
function penjumlahan(bil1,bil2){
    return bil1 + bil2;
}

// Required Parameter
const halo = nama => 'Halo ${nama}!';
// halo('Umam) --> Halo Umam!

const penjumlahan = (a,b) => a+b;
// penjumlahan (5,4) --> 9

const luasLingkaran = radius =>{
    const PI = 22/7;
    return PI * radius ** 2;
}
// luasLingkaran(7) --> 154

// Optional Parameter
const penjumlahan = (a,b=0)  => a+b;
// penjumalahan(5,4) --> 9
// penjumlahan(5) --> 5

// Callback Function
const tampilkanHasil = (hasil) => alert('Hasil = ${Hasil}');

const penjumlahan = (a,b,display) => {
    display(hasil); // callback function
}

penjumlahan(9,6,tampilkanHasil);
// Hasil = 15

penjumalahan(9,6,(hasil)=> alert('wah, hasilnya adalah ${}hasil'));
// wah, hasilnya adalah 15

// Overflow argument
const penjumlahan = (a,b) => a + b;
let hasil = penjumlahan(3,4,5,6);

alert('Hasil penjumlahan = ${hasil}');
// Hasil penjumlahan - 7

// Rest Paramaters 
function jumlahkanSemuanya (...bilangan){
    let total = 0;

    for(let bil of bilangan)
        total += bil;

    return total;
}
let hasil1 = jumlahkanSemuanya(1,2,3,4,5,6);
let hasil2 = jumlahkanSemuanya(9,8,7);

alert(hasil1);
// 21
alert(hasil2);
// 24