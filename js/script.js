/*============ event navbar ============*/
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling ke bawah, sembunyikan header
    header.style.top = '-100px';
  } else {
    // Scrolling ke atas, tampilkan header
    header.style.top = '0';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Menghindari nilai negatif
});

/*============ menu icon navbar ============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


/*============ scroll section active link ============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
  sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
      });
    };
  });

/*============ sicky navbar ============*/  
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

/*============ remove menu icon navbar when click navbar link (scroll)============*/ 
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*============ dark light mode start ============*/
let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
};
/*============ dark light mode end ============*/

/*============ scroll reveal start ============*/
ScrollReveal({
  reset: true,
  distance:'80px',
  duration:2000,
  delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .skills-container, .sevices-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

/*============ scroll reveal end ============*/


/*========== contact setup start ========== */

const form = document.querySelector("form");
const Name = document.getElementById("name");
const EmailInput = document.getElementById("email");
const Phone = document.getElementById("phone");
const SubjectInput = document.getElementById("Subject");
const MessageInput = document.getElementById("message");

function showError(input) {
  const errorText = input.nextElementSibling;
  if (input.value.trim() === "") {
    errorText.style.display = "block";
    input.classList.add("error");
  } else {
    errorText.style.display = "none";
    input.classList.remove("error");
  }
}

//fungsi validasi input dari karakter berbahaya(xss protection)
function sanitizeInput(input){
  const sanitizedValue = input.value
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
    input.value =sanitizedValue;
}

//fungsi validasi panjang input
function validateLength(input, maxLength) {
  if (input.value.length > maxLength) {
    input.value = input.value.substring(0, maxLength);
    alert(`Input terlalu panjang! Maksimal karakter untuk field ini adalah ${maxLength}`);
  }
}

// Fungsi untuk validasi form
function validateForm() {
  let isValid = true;

  // Cek setiap input, jika kosong jalankan showError
  sanitizeInput(Name);
  sanitizeInput(EmailInput);
  sanitizeInput(Phone);
  sanitizeInput(SubjectInput);
  sanitizeInput(MessageInput);
  showError(Name);
  showError(EmailInput);
  showError(Phone);
  showError(SubjectInput);
  showError(MessageInput);
  validateLength(Name, 50);
  validateLength(EmailInput, 100);
  validateLength(Phone, 15);
  validateLength(SubjectInput, 100);
  validateLength(MessageInput, 500);

  // Jika ada input yang kosong
  if (Name.value.trim() === "" || EmailInput.value.trim() === "" || Phone.value.trim() === "" ||
      SubjectInput.value.trim() === "" || MessageInput.value.trim() === "") {
    isValid = false;
  }
  return isValid;
}

// Fungsi untuk mengirim email melalui EmailJS
function sendEmail() {
  const templateParams = {
    from_name: Name.value,
    email: EmailInput.value,
    phone: Phone.value,
    subject: SubjectInput.value,
    message: MessageInput.value
  };
  emailjs
  .send('service_a2y6g0i', 'template_lwy60kv', templateParams)
  .then(function(response) {
    Swal.fire({
      icon: 'success',
      title: 'Pesan Berhasil Dikirim!',
      text: 'Terima kasih sudah menghubungi Ricky. Tunggu Saya akan segera membalasnya. Anda sungguh luar biasa..!',
      showConfirmButton: true,
      confirmButtonText: 'OK'
    }).then(() => {
      form.reset();
    });
  })
  .catch(function(error) {
    Swal.fire({
      icon: 'error',
      title: 'Pengiriman Gagal!',
      text: 'Ada masalah, mohon coba lagi nanti. Terimakasih',
    });
  });
}
// jalankan tombol submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateForm()) {
    sendEmail();
  }
});

/*========== contact setup end ========== */