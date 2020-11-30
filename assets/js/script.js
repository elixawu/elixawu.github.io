function unhideLightbox(lightboxID) {
	// SHOW overlay
	document.getElementById('lightbox-overlay').classList.remove('hidden');
	// SHOW lightbox image
	document.getElementById(lightboxID).classList.remove('hidden');
}

function unhideLightboxes() {
	unhideLightbox(slidename);
}

let len = document.getElementsByClassName('lightbox').length;

for (let i = 1; i <= len; i++) {
	let slidename = "slide" + i;
	document.getElementById(slidename).onclick = unhideLightboxes;
}