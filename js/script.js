window.onload = function () {
	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.respondsive-menu');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});

	document.querySelectorAll(".info-btn").forEach(function(button) {
		button.addEventListener("click", function() {
			var hiddenContent = this.parentElement.querySelector(".hiddeninfo");
			if (hiddenContent.style.display === "none") {
				hiddenContent.style.display = "block";
				this.textContent = "Hide";
			} else {
				hiddenContent.style.display = "none";
				this.textContent = "Look Info";
			}
		});
	
		button.addEventListener("click", function() {
			var hiddenContent = this.parentElement.querySelector(".hiddeninfo");
			if (hiddenContent.style.maxHeight) {
				hiddenContent.style.maxHeight = null;
			} else {
				hiddenContent.style.maxHeight = hiddenContent.scrollHeight + "px";
			}
		});
	});
	
	
}
  