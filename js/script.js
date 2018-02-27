var button = document.querySelector(".button-popup");
var form = document.querySelector(".pop-up");
var arrival = document.querySelector("[name=entry-date]");
var departure = document.querySelector("[name=departure-date]");
var adults = document.querySelector("[name=grownups]");
var children = document.querySelector("[name=kids]");
var storedArrival = localStorage.getItem("arrival");
var storedDeparture = localStorage.getItem("departure");
var storedAdults = localStorage.getItem("adults");
var storedChildren = localStorage.getItem("children");
if (form) {
	form.style.display = "none"
};

button.addEventListener("click", function(){
	if ( form.style.display === "none" ) {
		form.style.display = "block";
		form.classList.add("modal-search-rollout")
	} else {
		form.style.display = "none";
		form.classList.remove("modal-error");
		form.classList.remove("modal-search-rollout")
	};
	if (storedArrival) {
		arrival.value = storedArrival;
	}
	if (storedDeparture) {
		departure.value = storedDeparture;
	}
	if (storedAdults) {
		adults.value = storedAdults;
	}
	if (storedChildren) {
		children.value = storedChildren;
	}
	if ((arrival.value) && (departure.value) && (adults.value)) {
		form.focus();
	} else {
		arrival.focus();
	}
});
form.addEventListener("submit", function(evt){
	if (!((arrival.value) && (departure.value) && (adults.value))) {
		evt.preventDefault();
		form.classList.remove("modal-error");
		form.offsetWidth = form.offsetWidth;
		form.classList.add("modal-error");
	} else {
		localStorage.setItem("arrival", arrival.value);
		localStorage.setItem("departure", departure.value);
		localStorage.setItem("adults", adults.value);
		localStorage.setItem("children", children.value);
	}
});
form.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if ( form.style.display === "none" ) {
			form.style.display = "block";
			form.classList.add("modal-search-rollout")
		} else {
			form.style.display = "none";
			form.classList.remove("modal-error");
			form.classList.remove("modal-search-rollout")
		};
	};
});