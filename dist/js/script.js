const e=document.querySelector(".menu-btn"),t=document.querySelector(".menu");e.addEventListener("click",function(){e.classList.toggle("active"),t.classList.toggle("active")}),window.onscroll=function(){window.pageYOffset>=o?n.classList.add("sticky"):n.classList.remove("sticky")};const n=document.getElementById("myHeader"),o=n.offsetTop;new Swiper(".swiper",{direction:"horizontal",loop:!0,slidesPerView:1,spaceBetween:10,breakpoints:{481:{slidesPerView:2,spaceBetween:20},993:{slidesPerView:3,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}},autoplay:{delay:1500},pagination:{el:".swiper-pagination"},scrollbar:{el:".swiper-scrollbar"},keyboard:{enabled:!0,onlyInViewport:!1}});const r=window.innerHeight;$(function(){$(window).scroll(function(){$(this).scrollTop()>r?$("#toTop").fadeIn():$("#toTop").fadeOut()}),$("#toTop").click(function(){$("body,html").animate({scrollTop:0},window)})});const c=document.querySelector("#msgOne"),l=document.querySelector("#name"),s=document.querySelector("#emailInp"),a=document.querySelector("#inputPhone"),i=document.querySelector("#msg"),u=document.querySelector("#inputCheckbox"),d=document.querySelector(".contact-form__btn"),p={};var m=(t,n)=>{t.addEventListener("input",e=>{e.target.style.borderColor="#D9D9D9",p[n]=e.target.value,e.target.value||y(t)})};m(c,"unternehmen"),m(l,"name"),m(s,"email"),m(a,"phone"),m(i,"nachricht"),u.addEventListener("click",e=>{e.target.checked&&e.target,p.checked=document.querySelector(".checkbox__body span").style.color="#000"});const y=e=>{e.style.borderColor="#ef0404",e.value="",e.placeholder="Information eingeben",e.className=`${e.className.split(" ").filter(e=>"placeholder-none"!==e).join(" ")} placeholder-none`},h=()=>{var e=document.querySelector("#msgOne"),t=document.querySelector("#name"),n=document.querySelector("#emailInp"),o=document.querySelector("#inputPhone"),r=document.querySelector("#msg"),{unternehmen:c,name:l,email:s,phone:a,nachricht:i,checked:u}=p;if(c&&l&&s&&a&&i&&u)try{!function(e,t){console.log("Отправка запроса"),e.preventDefault?e.preventDefault():e.returnValue=!1;var n=new XMLHttpRequest;n.open("POST",t,!0),n.onload=function(){200<=n.status&&n.status<400?(json=JSON.parse(this.response),console.log(json),"success"==json.result?alert("Сообщение отправлено"):alert("Ошибка. Сообщение не отправлено")):alert("Ошибка сервера. Номер: "+n.status)},n.onerror=function(){alert("Ошибка отправки запроса")},n.send(new FormData(e.target))}(c,l)}catch(e){console.log(e)}else c||y(e),l||y(t),s||y(n),a||y(o),i||y(r),u||(document.querySelector(".checkbox__body span").style.color="rgb(239, 4, 4)")};d.addEventListener("click",e=>{e.preventDefault(),h()}),d.setAttribute("disabled",""),u.addEventListener("click",function(){u.checked?d.removeAttribute("disabled"):d.setAttribute("disabled","")});