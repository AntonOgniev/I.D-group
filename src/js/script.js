
// $(document).ready(function () {
// 	$(".specialization__slider").slick({
// 		arrows: false,
// 		responsive: [
// 			{
// 				breakpoint: 992,
// 				settings: "slick"
// 			},
// 			{
// 				breakpoint: 5000,
// 				settings: "unslick"
// 			}
// 		]
// 	})
// })

// const body = document.querySelector("body"),
// 	open = document.querySelector(".toggle"),
// 	burgerOpen = document.querySelector(".bx-menu"),
// 	close = document.querySelector(".bx-x"),
// 	menu = document.querySelector(".menu"),
// 	menuItem = document.querySelectorAll(".header__nav-link"),
// 	header = document.querySelector(".header");

// [`resize`].forEach(it => {
// 	window.addEventListener(it, () => {
// 		const body = document.querySelector("body"),
// 			close = document.querySelector(".bx-x"),
// 			burgerOpen = document.querySelector(".bx-menu"),
// 			menu = document.querySelector(".header__nav");



// 		const pageWidth = document.documentElement.scrollWidth;
// 		if (pageWidth <= 992) {
// 			body.classList.remove("no-skroll")
// 			close.classList.remove("close")
// 			menu.classList.remove("active")
// 			menuItem.forEach(menuI => {
// 				menuI.addEventListener("click", function () {
// 					burgerOpen.classList.add("open");
// 					close.classList.remove("close");
// 					menu.classList.remove("active")
// 					body.classList.remove("no-skroll")
// 					header.classList.remove("header__menu-active")
// 				})
// 			})
// 		}
// 		if (pageWidth > 768) {
// 			body.classList.remove("no-skroll")
// 			close.classList.remove("close")
// 			menu.classList.remove("active")
// 			burgerOpen.classList.add("open");
// 		}
// 	});
// });

// open.addEventListener("click", function () {
// 	burgerOpen.classList.toggle("open");
// 	close.classList.toggle("close");
// 	menu.classList.toggle("active")
// 	body.classList.toggle("no-skroll")
// 	header.classList.toggle("header__menu-active")
// })

// menuItem.forEach(menuI => {
// 	menuI.addEventListener("click", function () {
// 		burgerOpen.classList.toggle("open");
// 		close.classList.toggle("close");
// 		menu.classList.toggle("active")
// 		body.classList.toggle("no-skroll")
// 		header.classList.toggle("header__menu-active")
// 	})
// })


// Отправка данных на сервер
function send(event, php){
    console.log("Отправка запроса");
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function() {
        if (req.status >= 200 && req.status < 400) {
        json = JSON.parse(this.response); // Ебанный internet explorer 11
            console.log(json);
            
            // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
            if (json.result == "success") {
                // Если сообщение отправлено
                alert("Сообщение отправлено");
            } else {
                // Если произошла ошибка
                alert("Ошибка. Сообщение не отправлено");
            }
        // Если не удалось связаться с php файлом
        } else {alert("Ошибка сервера. Номер: "+req.status);}}; 
    
    // Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function() {alert("Ошибка отправки запроса");};
    req.send(new FormData(event.target));
    }
