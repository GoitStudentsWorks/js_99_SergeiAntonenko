import{f as c,a as k,h as y,c as L,r as $}from"./assets/sign-up-89d9b980.js";import{P as A}from"./assets/vendor-372b0e6c.js";import"https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";const P="/js_99_SergeiAntonenko/assets/trash-03-478df87d.svg",B="/js_99_SergeiAntonenko/assets/modal-icons-6da17b7d.svg#icon-amazon-logo",w="/js_99_SergeiAntonenko/assets/modal-icons-6da17b7d.svg#icon-ibooks-logo",g="/js_99_SergeiAntonenko/assets/icons-shop-5d5cc664.svg",i={bookList:document.querySelector(".shopping-list-saved"),emptyList:document.querySelector(".shopping-list-empty"),pagination:document.querySelector(".tui-pagination")},u=window.innerWidth>=768?3:4,I=window.innerWidth>=768?3:2;v();async function v(){const e=c();if(p(i.pagination),k(i.bookList),!e||e.length===0)m(i.emptyList),p(i.pagination);else{const s=await y(e);if(s&&s.length!==0){const a=T(s,u),t=n.getCurrentPage();_(a[t-1]),m(i.pagination),document.querySelectorAll(".saved-item-delete-btn").forEach(r=>r.addEventListener("click",j))}}L()}function S(e){return e.map(({_id:s,book_image:a,title:t,list_name:r,description:h,author:f,buy_links:b})=>{const d=b.reduce((l,o)=>(o.name==="Amazon"&&(l.amazon=o.url),o.name==="Apple Books"&&(l.apple=o.url),l),{});return`<li class="saved-item">
      <div class="saved-item-cover">
        <img
          class="saved-item-cover-img"
          src="${a}"
          alt="${t}"
        />
      </div>
      <div class="saved-item-discription">
        <div class="saved-item-discription-top">
          <div class="saved-item-title-wrap">
            <h2 class="saved-item-title">${t}</h2>
            <p class="saved-item-genre">${r}</p>
          </div>
          <button class="saved-item-delete-btn" data-id=${s}>
            <img
              class="delete-btn-img"
              src= ${P}
              alt="delete button"
            />
          </button>
        </div>
        <p class="saved-item-short">
          ${h}
        </p>
        <div class="saved-item-wrap-bottom">
          <p class="saved-item-author">${f}</p>
          <ul class="saved-item-refer-list">
            <li class="saved-item-refer-item">
              <a
                href="${d.amazon}"
                class="saved-item-refer-item-link"
                target="_blank"
              >
                <svg
                  class="saved-item-refer-amazon-logo"
                  width="62"
                  height="19"
                >
                  <use href=${B}></use>
                </svg>
              </a>
            </li>
            <li class="saved-item-refer-item">
              <a
                href="${d.apple}"
                class="saved-item-refer-item-link"
                target="_blank"
              >
                <svg
                  class="saved-item-refer-ibooks-logo"
                  width="16"
                  height="16"
                >
                  <use href=${w}></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </li>`}).join("")}function _(e){const s=S(e);i.bookList.insertAdjacentHTML("beforeend",s)}function p(e){e.classList.add("is-hidden")}function m(e){e.classList.remove("is-hidden")}function j(e){const s=e.currentTarget.dataset.id;$(s),i.bookList.innerHTML="",n.setTotalItems(c().length),n.movePageTo(n.getCurrentPage())}const H=document.getElementById("pagination"),M={totalItems:c().length,itemsPerPage:u,visiblePages:I,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}"><svg >
                    <use href = "${g}#icon-pagination-{{type}}"></use>
                </svg></span></a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}"><svg >
                    <use href = "${g}#icon-pagination-{{type}}"></use>
                </svg></span></span>`,moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},n=new A(H,M);n.on("afterMove",({page:e})=>{i.bookList.innerHTML="",v()});function T(e,s){let a=[];for(let t=0;t<e.length;t+=s)a.push(e.slice(t,t+s));return a}
//# sourceMappingURL=commonHelpers2.js.map
