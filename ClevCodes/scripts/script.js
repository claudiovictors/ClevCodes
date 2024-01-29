function opcoesNormais() {

	//Trabalhando com o menu
	var menu = window.document.querySelector('.menu-items');
	var searchBox = window.document.querySelector('.search-box .bx-search');

	searchBox.addEventListener('click', () => {
		menu.classList.toggle('inputshow');

		if (menu.classList.contains('inputshow')) {
			searchBox.classList.replace('bx-search', 'bx-x');
		} else {
			searchBox.classList.replace('bx-x', 'bx-search');
		}
	})

	var btnMedia = window.document.querySelector('.menu-items .bx-menu');
	var closeMedia = window.document.querySelector('.nav-links .bx-x');
	var menuMedia = window.document.querySelector('.nav-links');

	btnMedia.addEventListener('click', () => {
		menuMedia.style.left = '0%';
	})

	closeMedia.addEventListener('click', () => {
		menuMedia.style.left = '-100%';
	})

	var htmlCss = window.document.querySelector('.htmlcss-arrow');

	htmlCss.addEventListener('click', () => {
		menuMedia.classList.toggle('show1');
	})


	//Criando  o botao scroll
	let scarollBtn = window.document.querySelector('.scrollButton')
	window.onscroll = (e)=>{
		if(window.pageYOffset >= 600){
			scarollBtn.classList.add('activarScroll')
		} else {
			scarollBtn.classList.remove('activarScroll')
		}
	}
}
opcoesNormais();