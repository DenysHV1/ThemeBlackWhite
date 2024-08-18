const container = document.querySelector('.container');

function setMarkup(containerInner){
let arr = [];
for (let i = 0; i<=10; i+=1){
	arr.push(i);
}

const markup = arr.map(item => `<a class="link" href="#">link number ${item}</a>`).join('');

return containerInner.insertAdjacentHTML('afterbegin', markup)
}

setMarkup(container)

const link = document.querySelectorAll('a');
const buttons = document.querySelectorAll('button');
const body = document.querySelector('body')
const themeBtn = document.querySelector('.black-white-style');


themeBtn.addEventListener('click', ()=> {
	if(themeBtn.textContent !== 'white'){
		themeBtn.textContent = 'white'
		link.forEach(item => {
			item.style.backgroundColor = 'black'; 
			item.style.color = 'white';
		})
		buttons.forEach(item => {
			item.style.backgroundColor = 'black'; 
			item.style.color = 'white';
		})
		body.style.backgroundColor = 'rgb(175, 180, 184)';
		body.style.color = 'white'
	}else{
		themeBtn.textContent = 'black'
		link.forEach(item => {
			item.style.backgroundColor = ''; 
			item.style.color = '';
		})
		buttons.forEach(item => {
			item.style.backgroundColor = 'rgb(175, 180, 184)'; 
			item.style.color = 'black';
		})
		body.style.backgroundColor = '';
		body.style.color = ''
	}
	
})

//we need add input and textarea to forEach for change theme