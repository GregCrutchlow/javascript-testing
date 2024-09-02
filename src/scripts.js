// function changeBG(bgColor, textColor) {
// 	const body = document.querySelector('body');
// 	(body.style.backgroundColor = bgColor), (body.style.color = textColor);
// }

// changeBG('#505050', '#fff');

let favColor = document.getElementById('favcolor');
function logColor() {
	event.preventDefault();
	const p = document.getElementById('color-output');
	p.innerText = 'Selected colour hex: ' + favColor.value;
	return favColor.value;
}

// const bgBtn = document.getElementById('change-bg');

function changeBg() {
	const body = document.querySelector('body');
	body.style.backgroundColor = favColor.value;
}
