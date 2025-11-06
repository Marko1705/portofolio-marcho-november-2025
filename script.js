/// --- Setup awal
const pages = document.querySelectorAll(".book-page.page-right");
const coverRight = document.querySelector(".cover.cover-right");
const pageLeft = document.querySelector(".book-page.page-left");
const contactMeBtn = document.querySelector(".btn.contact-me");
const backProfileBtn = document.querySelector(".back-profile");
const pageTurnBtn = document.querySelectorAll(".nextprev-btn");

let totalPages = pages.length;
let pageNumber = totalPages;

/// --- Inisialisasi z-index default
pages.forEach((page, index) => {
  page.style.zIndex = 20 - index;
});

/// --- Fungsi reverse index
function reverseIndex() {
  pageNumber--;
  if (pageNumber < 0) pageNumber = totalPages - 1;
  return pageNumber;
}

/// --- Tombol Next/Prev
pageTurnBtn.forEach((el, index) => {
  el.onclick = () => {
    const pageTurnId = el.getAttribute("data-page");
    const pageTurn = document.getElementById(pageTurnId);

    if (pageTurn.classList.contains("turn")) {
      pageTurn.classList.remove("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 20 - index;
      }, 500);
    } else {
      pageTurn.classList.add("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 20 + index;
      }, 500);
    }
  };
});

/// --- Tombol Contact Me (buka semua halaman ke depan)
contactMeBtn.onclick = () => {
  pages.forEach((page, index) => {
    setTimeout(() => {
      page.classList.add("turn");
      setTimeout(() => {
        page.style.zIndex = 20 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};

/// --- Tombol Back to Profile (balik semua halaman ke belakang)
backProfileBtn.onclick = () => {
  pages.forEach((_, index) => {
    setTimeout(() => {
      const i = reverseIndex();
      pages[i].classList.remove("turn");

      setTimeout(() => {
        pages[i].style.zIndex = 10 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};

/// --- Opening Animation
setTimeout(() => {
  coverRight.classList.add("turn");
}, 2100);

setTimeout(() => {
  coverRight.style.zIndex = -1;
}, 2800);

setTimeout(() => {
  pageLeft.style.zIndex = 20;
}, 3200);

pages.forEach((_, index) => {
  setTimeout(() => {
    const i = reverseIndex();
    pages[i].classList.remove("turn");

    setTimeout(() => {
      pages[i].style.zIndex = 10 + index;
    }, 500);
  }, (index + 1) * 200 + 2100);
});
