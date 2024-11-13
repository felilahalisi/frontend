// Data pilihan kota untuk asal dan tujuan
const kotaAsal = ["Jakarta", "Bandung", "Surabaya", "Medan", "Makassar"];
const kotaTujuan = ["Bali", "Yogyakarta", "Semarang", "Palembang", "Balikpapan"];

// Fungsi untuk mengisi pilihan kota asal
function isiKotaAsal() {
    const asalSelect = document.getElementById("asal");
    kotaAsal.forEach(kota => {
        const option = document.createElement("option");
        option.value = kota;
        option.text = kota;
        asalSelect.appendChild(option);
    });
}

// Fungsi untuk mengisi pilihan kota tujuan
function isiKotaTujuan() {
    const tujuanSelect = document.getElementById("tujuan");
    kotaTujuan.forEach(kota => {
        const option = document.createElement("option");
        option.value = kota;
        option.text = kota;
        tujuanSelect.appendChild(option);
    });
}

// Memanggil fungsi untuk mengisi pilihan saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    isiKotaAsal();
    isiKotaTujuan();
});
