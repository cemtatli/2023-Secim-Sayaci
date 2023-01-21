// Geri saydığımız tarih
let countDownDate = new Date("May 14, 2023 00:00:00").getTime();
// Geri sayımı her 1 saniyede bir güncelleme
let x = setInterval(function () {
  // Bugünün tarihini ve saatin
  let now = new Date().getTime();
  // Şimdiki zaman ile geri sayım tarihi arasındaki fark
  let distance = countDownDate - now;
  // Günler, saatler, dakikalar ve saniyeler için zaman hesaplaması
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // DOM'a yazdırma işlemi
  document.getElementById("days").innerHTML = `${days} <span class="text-5xl md:text-2xl"> gün</span>`;
  document.getElementById("hours").innerHTML = `${hours} <span class="text-5xl md:text-2xl"> saat</span>`;
  document.getElementById("minutes").innerHTML = `${minutes} <span class="text-5xl md:text-2xl"> dakika</span>`;
  document.getElementById("seconds").innerHTML = `${seconds} <span class="text-5xl md:text-2xl"> saniye</span>`;
  // Geri sayım bitince yazılacak metin
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Bugün seçim var!";
  }
});

// LOCAL STORAGE DARK-LIGHT MODE İŞLEMLERİ
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
localStorage.theme = "light";
localStorage.theme = "dark";
localStorage.removeItem("theme");

// DARK MODE BUTONU
function darkMode() {
  document.documentElement.classList.toggle("dark");
}
