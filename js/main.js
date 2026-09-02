// Swiperの設定↓
const swiper = new Swiper(".mySwiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 10,

  // 画面幅769px以上のとき
  breakpoints: {
    769: {
      slidesPerView: 1,
      spaceBetween: 30,
    }
  },

  loopAdditionalSlides: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Swiperの設定↑


// おしながきデータA4サイズ画像↓
const oshimagakiData = [
  { 
    id: 1, 
    title: "CC福岡64 新刊おしながき", 
    creator: "がぶらぎ", 
    img: "./img/main_imgs/itayaosinagaki.png" 
  },
  { 
    id: 2, 
    title: "CC福岡64 おしながき", 
    creator: "しらすごはん", 
    img: "./img/main_imgs/お品書きろふまお.jpg" 
  },
  { 
    id: 3, 
    title: "CC福岡64 おしながき", 
    creator: "しらすごはん", 
    img: "./img/main_imgs/ガチャガチャシート.jpg" 
  },
  { 
    id: 4, 
    title: "CC福岡64 おしながき", 
    creator: "すみ", 
    img: "./img/main_imgs/吉住明紗_お品書き.png" 
  },
  { 
    id: 5, 
    title: "CC福岡64 おしながき", 
    creator: "47", 
    img: "./img/main_imgs/田中偲月 お品書き.png" 
  },
  { 
    id: 6, 
    title: "CC福岡64 おしながき", 
    creator: "作者C", 
    img: "./img/main_imgs/吉田美沙＿おしながき.png" 
  },
];

function renderOshimagaki() {
  const grid = document.getElementById('oshimagaki_grid');
  if (!grid) return;

  grid.innerHTML = '';

  oshimagakiData.forEach(item => {
    const cardHtml = `
      <article class="oshimagaki_card">
        <div class="card_img_box">
          <img src="${item.img}" alt="${item.title}">
        </div>
        <div class="card_info">
          <h4 class="item_title">${item.title}</h4>
          <div class="creator_tag">
            <span class="creator_label">Creator</span>
            <span class="creator_name">${item.creator}</span>
          </div>
        </div>
      </article>
    `;
    grid.insertAdjacentHTML('beforeend', cardHtml);
  });
}
document.addEventListener('DOMContentLoaded', renderOshimagaki);

function initModal() {
  const modal = document.getElementById('image_modal');
  const modalImg = document.getElementById('modal_img');
  const closeBtn = document.querySelector('.modal_close');
  const grid = document.getElementById('oshimagaki_grid');

  if (!modal || !modalImg || !grid) return;

  grid.addEventListener('click', (e) => {
    const targetImg = e.target.closest('.card_img_box img');
    if (targetImg) {
      modal.style.display = 'flex'; 
      setTimeout(() => {
        modal.classList.add('show'); 
      }, 10);
      modalImg.src = targetImg.src;
      modalImg.alt = targetImg.alt;
      document.body.style.overflow = 'hidden'; 
    }
  });

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300); 
    document.body.style.overflow = ''; 
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderOshimagaki(); 
  initModal();       
});
// おしながきデータA4サイズ画像↑



// お知らせバー
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.getElementById('closeNoticeBtn');
    const noticeBar = document.getElementById('topNoticeBar');

    if (closeBtn && noticeBar) {
      closeBtn.addEventListener('click', function() {
        noticeBar.style.display = 'none'; 
      });
    }
  });
  // お知らせバー