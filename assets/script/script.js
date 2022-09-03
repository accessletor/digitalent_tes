const burger = document.querySelector('.burger')
const sidebar = document.querySelector('.sidebar')
const bgSidebar = document.querySelector('.bg-sidebar')

burger.addEventListener('click', function(event) {
	this.classList.toggle('change')
	sidebar.classList.toggle('change')
	bgSidebar.classList.toggle('change')
})

bgSidebar.addEventListener('click', function(event) {
	this.classList.remove('change')
	sidebar.classList.remove('change')
	burger.classList.remove('change')
})
window.addEventListener('load', function () {
	Swal.fire({
		title: 'NEW EVENT!',
		text: 'free race on the highway',
		imageUrl: 'assets/image/homepage.jpg',
		imageWidth: 400,
		imageHeight: 200,
		imageAlt: 'HUT RI-77',
	});
});
