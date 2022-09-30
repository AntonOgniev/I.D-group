const menuBtn=document.querySelector(".menu-btn"),menu=document.querySelector(".menu");menuBtn.addEventListener("click",function(){menuBtn.classList.toggle("active"),menu.classList.toggle("active")}),window.onscroll=function(){stickyHeader()};const header=document.getElementById("myHeader"),sticky=header.offsetTop;function stickyHeader(){window.pageYOffset>=sticky?header.classList.add("sticky"):header.classList.remove("sticky")}function openModal(){const e=document.createElement("div");e.classList.add("modal","show"),e.setAttribute("id","myModal"),e.setAttribute("tabindex","-1"),e.innerHTML=`
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title">Ihr Brief wurde verschickt</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                          <h5 class="modal-text">Wir werden Sie in Kürze kontaktieren</h5>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn-secondary btn" data-js="signInBtn" data-bs-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>`,document.body.appendChild(e),this.myModal=new bootstrap.Modal(document.getElementById("myModal"),{}),this.myModal.show()}function closeModal(){this.myModal.dispose(),myModal.remove()}function send(e,t){console.log("Отправка запроса"),e.preventDefault?e.preventDefault():e.returnValue=!1;var o=new XMLHttpRequest;o.open("POST",t,!0),o.onload=function(){200<=o.status&&o.status<400?(json=JSON.parse(this.response),console.log(json),"success"==json.result?openModal():alert("Ошибка. Сообщение не отправлено")):alert("Ошибка сервера. Номер: "+o.status)},o.onerror=function(){alert("Ошибка отправки запроса")},o.send(new FormData(e.target))}const swiper=new Swiper(".swiper",{direction:"horizontal",loop:!0,slidesPerView:1,spaceBetween:10,breakpoints:{481:{slidesPerView:2,spaceBetween:20},993:{slidesPerView:3,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}},autoplay:{delay:1500},pagination:{el:".swiper-pagination"},scrollbar:{el:".swiper-scrollbar"},keyboard:{enabled:!0,onlyInViewport:!1}}),vh=window.innerHeight;$(function(){$(window).scroll(function(){$(this).scrollTop()>vh?$("#toTop").fadeIn():$("#toTop").fadeOut()}),$("#toTop").click(function(){$("body,html").animate({scrollTop:0},window)})});