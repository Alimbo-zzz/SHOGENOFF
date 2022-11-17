router();




function router(){
	const activeSection = {
		name: 'page-main',
	}

	const sections = document.querySelectorAll('section[data-type="page"]');
	const links = document.querySelectorAll('[data-type="page-link"]');

	links.forEach((el, i) => {
		el.addEventListener('click', ()=>{
			activeSection.name = el.dataset.name;
			check();
		})
	});

	check();

	function check(){
		sections.forEach(el => el.dataset.active = false);
		links.forEach(el => el.dataset.active = false);

		sections.forEach((el, i) => {
			if(el.id === activeSection.name) el.dataset.active = true;
		});

		links.forEach((el, i) => {
			if(el.dataset.name === activeSection.name) el.dataset.active = true;
		});
	}

}
