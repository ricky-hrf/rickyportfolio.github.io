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

function checkAnswer(button, answer) {
            const correctAnswer = 'object';
            const feedback = document.getElementById('feedback');

            if (answer === correctAnswer) {
                feedback.textContent = 'Jawaban benar!';
                feedback.classList.add('text-green-600');
                feedback.classList.remove('text-red-600');
            } else {
                feedback.textContent = 'Jawaban salah, coba lagi!';
                feedback.classList.add('text-red-600');
                feedback.classList.remove('text-green-600');
            }
        }
let portfolio = [
  {
    "gambar": "images/project1.png",
    "nama": "rcCoffeeshop",
    "description": "Website CoffeeShop sederhana",
    "link": "https://ricky-hrf.github.io/rcCoffeeshop.io/"
  },
  {
    "gambar": "images/project2.png",
    "nama": "Design Web",
    "description": "Aplikasi quis sederhana",
    "link":"#"
  },
  {
    "gambar": "images/project3.png",
    "nama": "lorem ipsum",
    "description": "Lorem ipsum dolor sit amet.",
    "link":"#"
  },
  {
    "gambar": "images/project4.png",
    "nama": "lorem ipsum",
    "description": "Lorem ipsum dolor sit amet.",
    "link":"#"
  },
  {
    "gambar": "images/project5.png",
    "nama": "Lorem ipsum ",
    "description": "Lorem ipsum dolor sit amet.",
    "link":"#"
  },
  {
    "gambar": "images/project6.png",
    "nama": "Simple Store Website",
    "description": "first project using javascript",
    "link":"https://ricky-hrf.github.io/rcStore.github.io/"
  }
];

let mySkills = [
  {
    "gambar": "images/html-icon.png",
    "skill": "HTML",
    "desc": "Kemampuan dalam menulis kode HTML yang bersih dan terstruktur"
  },
  {
    "gambar": "images/css-icon.png",
    "skill": "CSS",
    "desc": "Kemampuan yang baik dalam mendesain tampilan yang menarik dan responsif menggunakan CSS."
  },
  {
    "gambar": "images/js-icon.png",
    "skill": "JavaScript",
    "desc": "Kemampuan membuat interaktivitas pada halaman web menggunakan JavaScript murni."
  },
  {
    "gambar": "images/react.png",
    "skill": "ReactJs",
    "desc": "Memiliki kemampuan dalam membuat aplikasi responsif dengan ReactJs"
  },
  {
    "gambar": "images/logos_Express.js.png",
    "skill": "expressJs",
    "desc": "Mampu membangun RESTful API dan backend aplikasi menggunakan expressJs"
  },
  {
    "gambar": "images/php.png",
    "skill": "PHP",
    "desc": "Memiliki kemampuan dalam membuat halaman web dinamis menggunakan PHP."
  },
  {
    "gambar": "images/laravel.png",
    "skill": "Laravel",
    "desc": "Memiliki kemampuan menggunakan Laravel untuk membangun aplikasi web yang kompleks dan terstruktur."
  },
  {
    "gambar": "images/python-logo.png",
    "skill": "Python",
    "desc": "Memiliki kemampuan dalam membuat program sederhana dan menengah menggunakan Python"
  }
];

let portfolioContainer = document.getElementById("portfolioContainer");

portfolio.forEach(porto => {
  let portofolioBox = document.createElement("div");
  portofolioBox.className = "portfolioBox";
  portfolioContainer.appendChild(portofolioBox);
  let image = document.createElement("img");
  image.src = porto["gambar"];
  image.alt = porto["nama"];
  portofolioBox.appendChild(image);
  let portfolioLayer = document.createElement("div");
  portfolioLayer.className = "portfoliolayer";
  portofolioBox.appendChild(portfolioLayer);
  let judul = document.createElement("h4")
  judul.innerHTML = porto["nama"];
  portfolioLayer.appendChild(judul);
  let deskripsi = document.createElement("p");
  deskripsi.innerHTML = porto["description"];
  portfolioLayer.appendChild(deskripsi);
  let newDiv = document.createElement("div");
  let divBaru = document.createElement("div");
  let anchor = document.createElement("a");
  anchor.href = porto["link"];
  anchor.title = porto["nama"];
  anchor.setAttribute("target", "_blank");
  divBaru.appendChild(anchor);
  let icon = document.createElement("i");
  icon.className = "bx bx-link-external";
  anchor.appendChild(icon);
  newDiv.appendChild(divBaru);
  portfolioLayer.appendChild(newDiv);
});

let skills = document.getElementById("skills");

mySkills.forEach(ms => {
  let divPertama = document.createElement("div");
  divPertama.className = "p-0 flex flex-wrap group bg-white rounded-xl hover:shadow-lg transition-shadow duration-300 relative";
  skills.appendChild(divPertama);
  let anakDivPertama = document.createElement("div");
  anakDivPertama.className = "p-4 flex w-full justify-center mb-4 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer position-absolute";
  divPertama.appendChild(anakDivPertama);
  let image = document.createElement("img");
  image.src = ms["gambar"];
  image.alt = `Icon ${ms["skill"]}`;
  anakDivPertama.appendChild(image);
  let anakDivKedua = document.createElement("div");
  anakDivKedua.className = "flex w-full flex-col items-center justify-center min-h-64 bg-slate-800 p-2 rounded-b-lg text-center mt-auto [clip-path:polygon(50%_0%,_100%_35%,_100%_100%,_0%_100%,_0%_35%)]";
  let namaSkill = document.createElement("span");
  namaSkill.className = "text-3xl font-[Poppins] font-semibold text-gray-100 text-center mb-2";
  namaSkill.innerHTML = ms["skill"];
  anakDivKedua.appendChild(namaSkill)
  let deskripsi = document.createElement("p");
  deskripsi.className = "text-2xl font-[Poppins] text-gray-100";
  deskripsi.innerHTML = ms["desc"];
  anakDivKedua.appendChild(deskripsi);
  divPertama.appendChild(anakDivKedua);
});

let services = [
  {
    "service": "We Development",
    "desc":"Siap memiliki website yang menarik dan fungsional? Kami hadir untuk membantu Anda menciptakan website profesional yang tidak hanya tampil hebat, tetapi juga meningkatkan bisnis Anda! Ayo, bangun website impian Anda bersama kami!",
    "icon":"bx bx-code-alt"
  },
  {
    "service": "Desktop App Development",
    "desc": "Ingin brand Anda tampil beda dan menarik perhatian? Percayakan kepada kami untuk menciptakan aplikasi desktop yang inovatif dan fungsional, yang akan membawa pengalaman pengguna Anda ke tingkat berikutnya. Mari wujudkan ide-ide kreatif Anda!",
    "icon":"bx bxs-paint"
  },
  {
    "service":"Data Analysis",
    "desc":"Raih lebih banyak pelanggan dan tingkatkan penjualan dengan strategi analisis data kami! Kami siap mengoptimalkan kehadiran online Anda dan menjangkau audiens lebih luas. Hubungi kami sekarang untuk mulai mendominasi dunia digital!",
    "icon":"bx bx-bar-chart"
  }
]
import { dataTestimoni } from "./scriptTestimonial.js";

document.addEventListener("DOMContentLoaded", function () {
  const servicesContainer = document.getElementById("servicesContainer");
  services.forEach(item => {
      const servicesBox = document.createElement("div");
      servicesBox.className = "services-box";
      const icon = document.createElement("i");
      icon.className = item['icon'];
      servicesBox.appendChild(icon);
      const service = document.createElement("h3");
      service.textContent = item["service"];
      servicesBox.appendChild(service);
      const p = document.createElement("p");
      p.textContent = item["desc"];
      servicesBox.appendChild(p);
      servicesContainer.appendChild(servicesBox);
    });
  
  let test = [
  {
    "gambar":"images/baby.jpg",
    "name": "Baby Boy 02",
    "testi": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ducimus illo sapiente eos. Impedit quisquam, quasi velit ametdeserunt, officiis ipsa cupiditate, omnis magni fugiat quis. Ut earum, iure distinctio velit doloremque ratione facilis soluta unde voluptas. Amet maiores natus architecto facere, molestias repellat quibusdam iusto, inventore fugiat dolorem dicta mollitia vel incidunt est officiis distinctio voluptate excepturi, quaerat dolores."
  },
  {
    "gambar":"images/baby2.png",
    "name": "Suka pertama",
    "testi": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ducimus illo sapiente eos. Impedit quisquam, quasi velit ametdeserunt, officiis ipsa cupiditate, omnis magni fugiat quis. Ut earum, iure distinctio velit doloremque ratione facilis soluta unde voluptas. Amet maiores natus architecto facere, molestias repellat quibusdam iusto, inventore fugiat dolorem dicta mollitia vel incidunt est officiis distinctio voluptate excepturi, quaerat dolores."
  },
  {
    "gambar":"images/baby3.png",
    "name": "Baby Boy 01",
    "testi": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ducimus illo sapiente eos. Impedit quisquam, quasi velit ametdeserunt, officiis ipsa cupiditate, omnis magni fugiat quis. Ut earum, iure distinctio velit doloremque ratione facilis soluta unde voluptas. Amet maiores natus architecto facere, molestias repellat quibusdam iusto, inventore fugiat dolorem dicta mollitia vel incidunt est officiis distinctio voluptate excepturi, quaerat dolores."
  }
]
  const cardT = document.getElementById('cardT');
  test.forEach(dt => {
    let testimonial = document.createElement("div")
    testimonial.className = "testimonial-slide swiper-slide"
    cardT.appendChild(testimonial);

    let image = document.createElement("img");
    image.src = dt["gambar"];
    image.src = dt["name"];
    testimonial.appendChild(image);

    let nama = document.createElement('h3')
    nama.innerHTML = dt['name'];
    testimonial.appendChild(nama);

    let testimoni = document.createElement('p');
    testimoni.innerHTML = dt['testi'];
    testimonial.appendChild(testimoni);
      })
  })