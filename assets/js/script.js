function imagePopup() {
	let dog = document.getElementById("dog");
	dog.classList.remove("hidden");
}

let imgText = document.getElementById("dogimg");

imgText.onmouseover = imagePopup;