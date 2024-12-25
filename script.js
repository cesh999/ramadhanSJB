// Atur waktu berbuka (misalnya pukul 18:00:00)
const bukaPuasaJam = 21;
const bukaPuasaMenit = 0;
const bukaPuasaDetik = 0;

function updateTimer() {
  // Waktu saat ini
  const now = new Date();

  // Waktu berbuka hari ini
  const bukaPuasa = new Date();
  bukaPuasa.setHours(bukaPuasaJam, bukaPuasaMenit, bukaPuasaDetik);

  // Hitung selisih waktu
  const selisih = bukaPuasa - now;

  if (selisih > 0) {
    const hours = Math.floor(selisih / (1000 * 60 * 60));
    const minutes = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((selisih % (1000 * 60)) / 1000);

    // Tampilkan waktu hitung mundur
    document.getElementById('timer').textContent = 
      `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  } else {
    // Jika sudah waktu berbuka
    document.getElementById('timer').textContent = "Waktunya Berbuka!";
  }
}

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