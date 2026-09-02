// カテゴリ別の定義
const categories = [
  { id: 'keychain', name: 'ACRYLIC KEYCHAIN', icon: 'fa-camera', color: '#ff66aa' },
  { id: 'sticker', name: 'STICKER', icon: 'fa-note-sticky', color: '#66ccff' },
  { id: 'badge', name: 'BADGE', icon: 'fa-certificate', color: '#ffbb33' },
  { id: 'acrylic_stand', name: 'ACRYLIC STAND', icon: 'fa-chess-knight', color: '#44cc88' },
  {id: 'poster', name: 'POSTER CARD', icon: 'fa-list', color: '#999' },
  { id: 'other', name: 'OTHER GOODS', icon: 'fa-bag-shopping', color: '#b366ff' },
  { id: 'doujinshi', name: 'DOUJINSHI', icon: 'fa-book', color: '#ff6600' },
 
];

// 商品データ
const productsDB = [

   // アクリルキーホルダー↓
   {category: 'keychain', name: '緋八マナ', price: 500, creator: 'creator A', copyright: '© 2026 creator A', image: './img/CCFukuoka_63img/akkey/ak_ccf63_hihachi1.png' },
   {category: 'keychain', name: '抗議するコーギー', price: 500, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_63img/akkey/ak_ccf63_hachi1.png'},
   {category: 'keychain', name: '叶（にじたうん）', price: 500, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/akkey/ak_ccf63_leaf1.png'},
   {category: 'keychain', name: '葛葉（にじたうん）', price: 500, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/akkey/ak_ccf63_kuzuha.png'},
   {category: 'keychain', name: 'ハムさかな', price: 300, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/akkey/ak_ccf63_hamfish1.png'},
   {category: 'keychain', name: '魔界ノりりむ', price: 500, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/akkey/ak_ccf63_ririmu1.png'},
   {category: 'keychain', name: 'ルンルン（王冠）', price: 500, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/akkey/ak_ccf63_runrun.png'},
   // {category: 'keychain', name: '周央サンゴ', price: 500, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/akkey/ak_ccf63_sango1.png'},
   {category: 'keychain', name: 'シェリン・バーガンディ', price: 500, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/akkey/ak_ccf63_sherin1.png'},
   {category: 'keychain', name: 'ろふまるつながりロングチャーム', price: 500, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/akkey/ak_ccf63long_charm1.png'},
   // アクリルキーホルダー↑

   // ステッカー↓
   // {category: 'sticker', name: '抗議するコーギー', price: 100, creator: 'creator A', copyright: '© 2026 creator A', image: './img/CCFukuoka_63img/sticker/stk_ccf63_hati.png'},
   {category: 'sticker', name: '緋八マナステッカーセット', price: 300, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_63img/sticker/stk_ccf63_hihachi1.PNG'},
   {category: 'sticker', name: '葛葉（にじたうん）', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/sticker/stk_ccf63_kuzuha1.png'},
   {category: 'sticker', name: '叶（にじたうん）', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_leaf1.png'},
   {category: 'sticker', name: 'ましろ爻セット', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_masiro1.png'},
   // {category: 'sticker', name: 'ましろ爻セット', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_masiro3.png'},
   // {category: 'sticker', name: '月ノ美兎セット', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_mito1.png'},
   // {category: 'sticker', name: '月ノ美兎セット', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_mito2.png'},
   // {category: 'sticker', name: '月ノ美兎セット', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_mito3.png'},
   {category: 'sticker', name: '魔界ノりりむセット', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_ririmu1.png'},
   // {category: 'sticker', name: 'ルンルンセット', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_runrun1.png'},
   // {category: 'sticker', name: 'ルンルンセット', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_runrun2.png'},
   {category: 'sticker', name: 'ルンルンセット', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_runrun3.png'},
   {category: 'sticker', name: '周央サンゴ', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_sango1.png'},
   {category: 'sticker', name: '四神kgm', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_sisin2.png'},
   {category: 'sticker', name: '四神kid', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_sisin3.png'},
   {category: 'sticker', name: '四神knmc', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_sisin4.png'},
   {category: 'sticker', name: '四神fw', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_sisin1.png'},
   {category: 'sticker', name: 'シェリン・バーガンディ（A）', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_tantei.png'},
   {category: 'sticker', name: 'シェリン・バーガンディ（B）', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/sticker/stk_ccf63_tantei2.png'},
   {category: 'sticker', name: '花畑チャイカ', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_64img/sticker/stk_ccf64_tyaika02.png'},
   {category: 'sticker', name: '社築（やしろ きずく）', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_64img/sticker/stk_ccf64yasiro01.png'},
   {category: 'sticker', name: '加賀美ハヤト', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_64img/sticker/stk_ccf64_kagami02.png'},
   {category: 'sticker', name: '渡会雲雀ミニキャラステッカー', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_64img/sticker/渡会雲雀ミニキャラステッカー.png'},
   // ステッカー↑


   // 缶バッジ↓
   {category: 'badge', name: 'ろふまおガチャガチャ', price: 100, creator: 'creator A', copyright: '© 2026 creator A', image: './img/CCFukuoka_63img/badge/bdg_ccf63_gaotti.png'},
   {category: 'badge', name: '抗議するコーギー', price: 100, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_63img/badge/bdg_ccf63_hachi1.png'},
   {category: 'badge', name: 'ろふまおガチャガチャ', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63_harumottto1.png'},
   {category: 'badge', name: 'ろふまおガチャガチャ', price: 100, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_63img/badge/bdg_ccf63_hayatopusu.png'},
   {category: 'badge', name: '緋八マナA', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63_hibati1.png'},
   {category: 'badge', name: '緋八マナB', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63_hibati2.png'},
   {category: 'badge', name: '緋八マナC', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63_hibati3.png'},
   {category: 'badge', name: '叶（にじたうん）単品', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63_kanae1.png'},
   {category: 'badge', name: 'ルンルン', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63_runrun2.png'},
   {category: 'badge', name: 'ルンルン（給水）', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63_runrun3.png'},
   {category: 'badge', name: 'ルンルン（眼鏡）', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63_runrun4.png'},
   {category: 'badge', name: 'ルンルン（王冠）', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63_runrunoukan1.png'},
   {category: 'badge', name: '宇佐美リト', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63_usanomito.png'},
   {category: 'badge', name: '葛葉（にじたうん）', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_63img/badge/bdg_ccf63kuzuha1.png'},
   {category: 'badge', name: '加賀美ハヤト', price: 200, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/ak_ccf64_kagami01.png'},
   {category: 'badge', name: '花畑チャイカ', price: 200, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/ak_ccf64_tyaika01.png'},
   {category: 'badge', name: '社築（やしろ きずく）', price: 200, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/ak_ccf64_yasiro02.png'},
   {category: 'badge', name: 'イッテツ', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/イッテツ.png'},
   {category: 'badge', name: 'ウェン', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/ウェン.png'},
   {category: 'badge', name: 'カゲツ', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/カゲツ.png'},
   {category: 'badge', name: 'マナ', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/マナ.png'},
   {category: 'badge', name: 'ライ', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/ライ.png'},
   {category: 'badge', name: 'リト', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/リト.png'},
   {category: 'badge', name: 'ルベ', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/ルべ.png'},
   {category: 'badge', name: 'ロウ', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/ロウ.png'},
   {category: 'badge', name: 'ろふまおA', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/ak_ccf64_kgm.png'},
   {category: 'badge', name: 'ろふまおB', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/ak_ccf64_knmc.png'},
   {category: 'badge', name: 'ろふまおC', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/ak_ccf64_fw.png'},
   {category: 'badge', name: 'ろふまおD', price: 100, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_64img/badge/ak_ccf64_kid.png'},
   
   // 缶バッジ↑


   // アクリルスタンド↓
   {category: 'acrylic_stand', name: 'ルンルン（王冠）', price: 800, creator: 'creator D', copyright: '© 2026 creator A', image: './img/CCFukuoka_63img/akusta/as_ccf63_runrun1.png'},
   {category: 'acrylic_stand', name: '魔界ノりりむ', price: 800, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_63img/akusta/as_ccf63_ririmu1.png'},
   // アクリルスタンド↑

   // ポスターカード
   {category: 'poster', name: 'サニー・ブリスコーポストカード', price: 200, creator: 'creator A', copyright: '© 2026 creator A', image: './img/CCFukuoka_64img/poster/サニー・ブリスコー  ポストカード.png'},
   {category: 'poster', name: 'レン ゾットポストカード', price: 200, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_64img/poster/レン ゾット ポストカード.png'},
   {category: 'poster', name: '不破湊ポストカード', price: 200, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_64img/poster/不破湊 ポストカード.png'},
   {category: 'poster', name: '渡会雲雀Aポストカード', price: 200, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_64img/poster/家に来たよ🎶渡会雲雀 ポストカード.png'},
   {category: 'poster', name: '渡会雲雀Bポストカード', price: 200, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_64img/poster/渡会雲雀ポストカード.png'},
   {category: 'poster', name: '加賀美&チャイカ&社築ポストカード', price: 200, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_64img/poster/雑キカード.jpg'},
   {category: 'poster', name: '加賀美&チャイカ&社築ポストカード', price: 200, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_64img/poster/雑キ共通.jpg'},
   {category: 'poster', name: '周央サンゴポストカード', price: 300, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_64img/poster/周央サンゴ_ポストカード.png'},
   {category: 'poster', name: 'rfmoポストカード', price: 200, creator: 'creator B', copyright: '© 2026 creator B', image: './img/CCFukuoka_64img/poster/rfmoポストカード.jpg'},
   
   // ポスターカード

   // 同人誌↓
   {category: 'doujinshi', name: '同人誌/月ノ美兎と謎ノ美兎の百合本', price: 300, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_64img/doujinshi/表紙.png'},
   // 同人誌  

   // その他グッズ↓
   {category: 'other', name: '刹那の「ワタシモイレテヨ」斬り', price: 0, creator: 'カピムン', copyright: '© 2026 creator カピムン', image: './img/game/setuna_img/game_setuna1.png'},
   {category: 'other', name: 'ルンルンのおいしぃ！らっしゅ', price: 0, creator: 'カピムン', copyright: '© 2026 creator カピムン', image: './img/game/runrun_img/title_logo_img.png'},
   {category: 'other', name: 'ぷちゲームタグ入りキーホルダー（ルンルン）', price: 500, creator: 'カピムン', copyright: '© 2026 creator カピムン', image: './img/game/runrun_img/game_runrun2.jpeg'},
   {category: 'other', name: 'ぷちゲームタグ入りキーホルダー（チャイカ)', price: 500, creator: 'カピムン', copyright: '© 2026 creator カピムン', image: './img/game/setuna_img/game_setuna2.jpeg'},
   {category: 'other', name: 'ルンルンスマホラバーバンド', price: 1200, creator: 'creator C', copyright: '© 2026 creator C', image: './img/CCFukuoka_62img/sundry_goods/Conceptual_image.png'},
   {category: 'other', name: 'ルンルンスマホラバーバンド', price: 1200, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_62img/sundry_goods/smartphone_strap_omote.png'},
   {category: 'other', name: 'ルンルンスマホラバーバンド', price: 1200, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_62img/sundry_goods/smartphone_strap_ura.png'},
   {category: 'other', name: 'ハムさかな眼鏡吹き', price: 500, creator: 'creator D', copyright: '© 2026 creator D', image: './img/CCFukuoka_62img/sundry_goods/眼鏡拭き.png'},
   // その他グッズ↑
];


const categoryListEl = document.getElementById('category_list');
const productsContainerEl = document.getElementById('products_container');

// サイドバーのカテゴリメニューを表示
function renderSidebar() {
   let html = `<div class="category_title"><i class="fa-solid fa-gem"></i> CATEGORY</div>`;

   categories.forEach(cat => {
      html +=`
            <div class="category_item" data-category="${cat.id}">
            <i class="fa-solid ${cat.icon}" style="color: ${cat.color}; width: 20px; text-align:center;"></i>
            ${cat.name}
            </div>
            `;
   });
      // すべての商品のボタン
      html +=`
             <div class="category_item" data-category="all">
             <i class="fa-solid fa-list" style="color: #999; width: 20px; text-align:center;"></i>
             すべての商品
             </div>
             `;
      categoryListEl.innerHTML = html;

      const items = categoryListEl.querySelectorAll('.category_item');
      items.forEach(item => {
         item.addEventListener('click', (e) => {
            items.forEach(i => i.classList.remove('active'));
            e.currentTarget.classList.add('active');

            const selectedCat = e.currentTarget.getAttribute('data-category');
            renderProducts(selectedCat);
         });
      });
}

// 商品の一覧表示
function renderProducts(filterCategory = 'all') {
   let html = '';

   const targetCategories = filterCategory ==='all'
   ? categories
   : categories.filter(cat => cat.id === filterCategory);

   targetCategories.forEach(cat => {
     const catProducts = productsDB.filter(p => p.category === cat.id);

     // 商品が存在する場合のみ表示
      if(catProducts.length > 0) {

         html += `
            <section class="category_section" id="section_${cat.id}">
            <div class="section_header">
               <h2 class="section_title">
               <span class="section_title_icon" style="background-color: ${cat.color};">
               </span>
               ${cat.name}
               </h2>
               <a href="#" class="see_all_link">すべて見る<i class="fa-solid fa-arrow-right"></i></a>
            </div>

            <div class="product_grid">
         `;


         catProducts.forEach(product => {
            html += `
               <div class="product_card">
                 <div class="product_img_wrap">
                   <img src="${product.image}" alt="${product.name}">
                 </div>
                 <div class="product_info">
                   <h3 class="product_name">${product.name}</h3>
                   <div class="product_price">¥${product.price} <span class="tax_text">(税込)</span></div>
                   <div class="product_creator">クリエイター：${product.creator}</div>
                   <div class="product_copyright">${product.copyright}</div>
                 </div>
               </div>
            `;
         });


         html += `
            </div>
            </section>
         `;
      }
   });

   productsContainerEl.innerHTML = html;
}


document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  renderProducts('all');
});

// カテゴリアイコン↓
// <i class="fa-solid ${cat.icon}"></i>