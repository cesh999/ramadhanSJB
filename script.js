// Waktu berbuka dan sahur default
const bukaPuasaJam = 18; // Waktu berbuka, jam 18:00
const sahurJam = 4; // Waktu sahur, jam 04:00

// Variabel untuk menentukan status saat ini
let statusSaatIni = "berbuka"; // Mulai dari berbuka

// Fungsi untuk menghitung selisih waktu
function updateTimer() {
  const now = new Date();

  // Tentukan waktu target (berbuka atau sahur)
  let targetTime = new Date();
  if (statusSaatIni === "berbuka") {
    targetTime.setHours(bukaPuasaJam, 0, 0, 0); // Waktu berbuka
  } else if (statusSaatIni === "sahur") {
    targetTime.setHours(sahurJam, 0, 0, 0); // Waktu sahur
  }

  // Jika waktu target sudah lewat, tambahkan 1 hari ke target
  if (now > targetTime) {
    targetTime.setDate(targetTime.getDate() + 1);
  }

  // Hitung selisih waktu
  const selisih = targetTime - now;
  const hours = Math.floor(selisih / (1000 * 60 * 60));
  const minutes = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((selisih % (1000 * 60)) / 1000);

  // Tampilkan waktu hitung mundur
  if (selisih > 0) {
    document.getElementById("timer").textContent = `${hours
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  } else {
    // Ubah status setelah waktu habis
    if (statusSaatIni === "berbuka") {
      statusSaatIni = "sahur";
      document.getElementById("status").textContent = "Hitung Mundur Sahur";
    } else if (statusSaatIni === "sahur") {
      statusSaatIni = "berbuka";
      document.getElementById("status").textContent = "Hitung Mundur Berbuka";
    }
  }
}

// Inisialisasi tampilan awal
document.getElementById("status").textContent =
  statusSaatIni === "berbuka" ? "Hitung Mundur Berbuka" : "Hitung Mundur Sahur";

// Perbarui setiap detik
setInterval(updateTimer, 1000);

// Tambahkan kutipan Islami secara acak
const quotes = [
  "“Sesungguhnya Allah bersama orang-orang yang sabar.”",
  "“Dan sebaik-baik manusia adalah yang paling bermanfaat bagi orang lain.”",
  "“Puasa adalah perisai, maka janganlah berkata buruk atau berbuat keji.”",
  "“Barang siapa yang berpuasa Ramadhan dengan iman dan mengharap pahala, diampuni dosa-dosanya yang telah lalu.”"
];

document.getElementById('quote').textContent = 
  quotes[Math.floor(Math.random() * quotes.length)];