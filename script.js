const $ = document.querySelector.bind(document),
	$$ = document.querySelectorAll.bind(document);

const menuBtn = $("#menuBtn"),
	body = document.body;
menuBtn.onclick = () => {
	body.classList.toggle("menuShow");
	if (body.classList.contains("menuShow")) {
		menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
	} else {
		menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
	}
};
