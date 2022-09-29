// const sendEmail = (unternehmen, name, email, telefonnumer, nachricht) => {
// 	Email.send({
// 		SecureToken : "944f6ecb-decd-43ec-b7bf-ed36a4de5d90",
// 		To: 'office@idgroup.com.pl',
// 		From: "office@idgroup.com.pl",
// 		Subject: `Unternehmen: ${unternehmen}`,
// 		Body: `<html><h2>Name: ${name}</h2><strong>Email Adresse: ${email} , Telefonnummer: ${telefonnumer}</strong><br></br><em>Nachricht: ${nachricht}</em></html>`
// 	}).then(
// 		message => alert(message)
// 	);
// }


 function send (event, php){
    console.log("Отправка запроса");
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function() {
        if (req.status >= 200 && req.status < 400) {
        json = JSON.parse(this.response);
            console.log(json);
            if (json.result == "success") {
                alert("Сообщение отправлено");
            } else {
                alert("Ошибка. Сообщение не отправлено");
            }
        } else {alert("Ошибка сервера. Номер: "+req.status);}}; 
    req.onerror = function() {alert("Ошибка отправки запроса");};
    req.send(new FormData(event.target));
    }

// const unternehmenForm = document.querySelector("#msgOne"),
// 	nameForm = document.querySelector("#name"),
// 	emailForm = document.querySelector("#emailInp"),
// 	phoneForm = document.querySelector("#inputPhone"),
// 	nachrichtForm = document.querySelector("#msg"),
// 	checkboxForm = document.querySelector("#inputCheckbox"),
// 	btnForm = document.querySelector(".contact-form__btn"),
// 	formBody = {};


// const addEventInput = (element, fieldName) => {
// 	element.addEventListener("input", (event) => {
// 		event.target.style.borderColor = "#D9D9D9"
// 		formBody[fieldName] = event.target.value
// 		!event.target.value && inputErrorWriter(element)
// 	})
// }

// addEventInput(unternehmenForm, "unternehmen")
// addEventInput(nameForm, "name")
// addEventInput(emailForm, "email")
// addEventInput(phoneForm, "phone")
// addEventInput(nachrichtForm, "nachricht")

// checkboxForm.addEventListener("click", (event) => {
// 	event.target.checked && event.target
// 	formBody.checked = (document.querySelector(".checkbox__body span").style.color = "#000")
// })

// const inputErrorWriter = (element) => {
// 	element.style.borderColor = "#ef0404"
// 	element.value = ""
// 	element.placeholder = "Information eingeben"
// 	element.className = `${element.className.split(" ").filter(el => el !== "placeholder-none").join(" ")} placeholder-none`
// }

// const validateForm = () => {
// 	const unternehmenForm = document.querySelector("#msgOne")
// 	const nameForm = document.querySelector("#name")
// 	const emailForm = document.querySelector("#emailInp")
// 	const phoneForm = document.querySelector("#inputPhone")
// 	const nachrichtForm = document.querySelector("#msg")

// 	const { unternehmen, name, email, phone, nachricht, checked } = formBody
// 	if (unternehmen && name && email && phone && nachricht && checked) {
// 		try {
// 			console.log(formBody);
// 			send(event, 'send.php')
// 		} catch (error) {
// 			console.log(error)
// 		}
// 	} else {
// 		!unternehmen && inputErrorWriter(unternehmenForm)
// 		!name && inputErrorWriter(nameForm)
// 		!email && inputErrorWriter(emailForm)
// 		!phone && inputErrorWriter(phoneForm)
// 		!nachricht && inputErrorWriter(nachrichtForm)
// 		!checked && (document.querySelector(".checkbox__body span").style.color = "rgb(239, 4, 4)")
// 	}
// }

// btnForm.addEventListener("click", (event) => {
// 	event.preventDefault()
// 	validateForm()
// })

// btnForm.setAttribute("disabled","")

// checkboxForm.addEventListener("click", function () {
// 	if (checkboxForm.checked) {
// 		btnForm.removeAttribute("disabled")
// 	} else {
// 		btnForm.setAttribute("disabled","")
// 	}
// })




