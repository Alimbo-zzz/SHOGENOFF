router();


function router(){
	const allSections = ['page-main', 'page-about', 'page-hobby', 'page-contacts'];
	var activeSection = 0;

	const sections = document.querySelectorAll('section[data-type="page"]');
	const links = document.querySelectorAll('[data-type="page-link"]');
	const tracker = document.querySelector('.tracker__page');
	const tracker_btn_prev = document.querySelector('.tracker__btn[data-arrow="prev"]');
	const tracker_btn_next = document.querySelector('.tracker__btn[data-arrow="next"]');

	links.forEach((el, i) => {
		el.addEventListener('click', ()=>{
			activeSection = i;
			check();
		})
	});

	tracker_btn_prev.addEventListener('click', ()=>{
		(activeSection > 0) && activeSection--;
		check();
	})
	tracker_btn_next.addEventListener('click', ()=>{
		(activeSection < allSections.length - 1) && activeSection++;
		check();
	})

	check();

	function check(){
		sections.forEach(el => el.dataset.active = false);
		links.forEach(el => el.dataset.active = false);

		sections.forEach((el, i) => {
			if(el.id === allSections[activeSection]) el.dataset.active = true;
		});

		links.forEach((el, i) => {
			if(el.dataset.name === allSections[activeSection]) el.dataset.active = true;
		});

		// activeTracker
		tracker.textContent = allSections[activeSection];		

		// btns
		tracker_btn_next.disabled = false;
		tracker_btn_prev.disabled = false;

		if(activeSection === 0) tracker_btn_prev.disabled = true;
		if(activeSection === allSections.length - 1) tracker_btn_next.disabled = true;
	}


}
