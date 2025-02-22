function menu() {
  const header = document.getElementById("header");
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");

  menuBtn.addEventListener("click", () => {
    header.classList.toggle("open");
    mobileMenu.classList.toggle("translate-y-0");
  });

  const pxShowScrolled = 10;

  if (window.scrollY >= pxShowScrolled) header.classList.add("scrolled");

  window.onscroll = function () {
    if (window.scrollY >= pxShowScrolled) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };
}

// GLightbox
function glightbox() {
  const lightbox = GLightbox({
    selector: ".glightbox",
    zoomable: false,
    touchNavigation: true,
    loop: false,
    autoplayVideos: true,
  });
}

// Swiper
function swiper() {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 40,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        spaceBetween: 80,
        slidesPerView: 2,
      },
      1536: {
        slidesPerView: 3,
      },
    },
  });
}

// Form
function form() {
  const formElem = document.getElementById("form");
  const btnSend = document.getElementById("btnSend");
  const alertSuccess = document.getElementById("alert-success");
  const alertDanger = document.getElementById("alert-danger");

  formElem.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch("mail.php", {
      method: "POST",
      body: formData,
    })
      .then(function () {
        alertSuccess.style.display = "block";
        btnSend.classList.add("hidden");
        formElem.reset();
      })
      .catch(function () {
        alertDanger.style.display = "block";
        setTimeout(() => (alertDanger.style.display = "none"), 4000);
      });
  });
}

// AOS
function aos() {
  AOS.init({
      duration: 700,
      offset: 150,
      once: true,
  
  });
}