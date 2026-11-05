// Main JavaScript untuk Homestay Teloi Kanan
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Booking Form Submission handling
  const form = document.getElementById('homestayBookingForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const tarikhMasuk = document.getElementById('tarikhMasuk').value;
      const tarikhKeluar = document.getElementById('tarikhKeluar').value;
      const pax = document.getElementById('bilanganPax').value;

      if (!tarikhMasuk || !tarikhKeluar) {
        alert('Sila pilih Tarikh Masuk dan Tarikh Keluar.');
        return;
      }

      const msg = `Salam Homestay Teloi Kanan, saya ingin membuat tempahan:\n- Tarikh Masuk: ${tarikhMasuk}\n- Tarikh Keluar: ${tarikhKeluar}\n- Bilangan Pax: ${pax}`;
      const url = `https://wa.me/6011243598?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
    });
  }
});
