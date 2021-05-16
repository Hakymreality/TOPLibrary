let popup = document.getElementById('popupForm');

function closeModal(ev) {
	ev.preventDefault();
	popup.style.display = 'none';
}

function displayModal() {
	popup.style.display = 'block';
}
