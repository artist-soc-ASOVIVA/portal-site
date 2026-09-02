document.addEventListener("DOMContentLoaded", () => {
  const cards = Array.from(document.querySelectorAll(".news_card"));
  const filterBtns = document.querySelectorAll(".filter_btn");
  const paginationContainer = document.getElementById("pagination");
  
  const itemsPerPage = 5; // 1ページあたりの数
  let currentPage = 1;
  let currentFilter = "all";
  let filteredCards = [];


  function updateView() {

    // 絞り込み
    filteredCards = cards.filter(card => {
      if (currentFilter === "all") return true;
      return card.getAttribute("data-category") === currentFilter;
    });


    const totalPages = Math.ceil(filteredCards.length / itemsPerPage) || 1;
    if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    //すべてのカードを非表示
    cards.forEach(card => (card.style.display = "none"));

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const cardsToShow = filteredCards.slice(startIndex, endIndex);

    cardsToShow.forEach(card => {
      card.style.display = "flex";
    });

    // ページネーションボタンの生成
    renderPagination(totalPages);
  }

  // ページネーションのボタンを生成する関数
  function renderPagination(totalPages) {
    paginationContainer.innerHTML = "";

    if (totalPages <= 1) return;

    // [前へ] ボタン
    const prevBtn = document.createElement("button");
    prevBtn.classList.add("page_btn", "page_btn_text");
    prevBtn.textContent = "前へ";
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        updateView();
        scrollToTop();
      }
    });
    paginationContainer.appendChild(prevBtn);

    // 数字ボタン
    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement("button");
      pageBtn.classList.add("page_btn");
      pageBtn.textContent = i;
      if (i === currentPage) {
        pageBtn.classList.add("active");
      }
      pageBtn.addEventListener("click", () => {
        currentPage = i;
        updateView();
        scrollToTop();
      });
      paginationContainer.appendChild(pageBtn);
    }

    // 次へ]ボタン
    const nextBtn = document.createElement("button");
    nextBtn.classList.add("page_btn", "page_btn_text");
    nextBtn.textContent = "次へ";
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        updateView();
        scrollToTop();
      }
    });
    paginationContainer.appendChild(nextBtn);
  }


  function scrollToTop() {
    const filterArea = document.querySelector(".filter_area");
    const offset = filterArea.getBoundingClientRect().top + window.scrollY - 20;
    window.scrollTo({ top: offset, behavior: "smooth" });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      filterBtns.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");

      // 1ページ目に戻す
      currentFilter = e.target.getAttribute("data-filter");
      currentPage = 1;
      updateView();
    });
  });


  updateView();
});