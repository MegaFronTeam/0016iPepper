"use strict";  
const $ = jQuery;


function setLang(langText) {
	let texts = document.querySelectorAll(".change-lang");
	for (const text of texts) {
		setTimeout(() => {
			// $('.headerBlock__lang-content').removeClass('fadeIn');
			text.innerHTML = text.getAttribute(`data-${langText}`)

			if(text.matches("a")) {
				text.href = text.getAttribute(`data-href-${langText}`)

			}
			document.documentElement.setAttribute('lang', (langText == "ru-RU") ? 'ru' : langText)
		}, 200);
	}


	$('.headerBlock__btn').addClass('checked fadeIn');
		$('.headerBlock__reserved').addClass('checked');
		$('.headerBlock__lang-content').addClass('fadeIn');

		setTimeout(() => {
			$('.headerBlock__lang-content').removeClass('fadeIn');
			$('.headerBlock__btn').removeClass('fadeIn');
		}, 1000);

} 


let langs = $('.headerBlock__lang:not(.disabled)');
let langsInput = $('.headerBlock__lang:not(.disabled) input');



function eventHandler() {  
 
	for (const lang of langs) {

		lang.addEventListener("click", function () {

			// console.log(langText);

			let langText = this.querySelector("input").value;
			setLang(langText)
			
		});
	}


};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

let checkUser = navigator.language || navigator.userLanguage; 
// let checkUser = navigator.languages ; 
 
let checkUserLang = (checkUser == 'ru') ? "ru-RU" : checkUser;
// console.log(userLang);
console.log(checkUserLang);

// console.log(document.querySelector(`[value=${checkUserLang}]`));

for (const lang of langsInput) {
	
	if(lang.value == checkUserLang ) {
		 console.log(lang.value);
		lang.checked = true;
	 }
	//  document.querySelector(`[value=${checkUserLang}]`).checked = true;
}
// console.log(document.querySelector(`[name="lang"]`));
setLang(checkUserLang)


$(document).ready(function () {
	$('body').addClass('fadeIn');
});