// BANNER SLIDESHOW
let slideIndex = 0;
	showSlides();

function showSlides() {
	let i;
	let slides = document.getElementsByClassName("slideshow_slides");
	let dots = document.getElementsByClassName("dot");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
	setTimeout(showSlides, 2000); // Change image every 2 seconds
}



// TAB LAYOUT
function openTab(tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab_content');
    tabContents.forEach(content => content.classList.remove('active'));

    // Deactivate all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show the selected tab content
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');

    // Activate the clicked tab
    const clickedTab = document.querySelector(`[onclick="openTab('${tabId}')"]`);
    clickedTab.classList.add('active');
}
