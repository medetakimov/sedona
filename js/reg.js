
  var link = document.querySelector(".button-popup");
  var popup = document.querySelector(".pop-up");
  var timeIn = popup.querySelector("[name=comein]");
  var timeOut = popup.querySelector("[name=comeout]");
  var storage = localStorage.getItem("timeIn");
  var storage = localStorage.getItem("timeOut");

  popup.classList.add("pop-up-js-init");
  link.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (storage) {
    timeIn.value = storage;
    setTimeout(function () {
      timeOut.focus();
    }, 700);
  } else {
    setTimeout(function () {
      timeIn.focus();
    }, 700);
  }

  if (popup.classList.contains("pop-up-js-init")) {
    popup.classList.remove("pop-up-js-init");
    popup.classList.add("pop-up-visible");
    popup.classList.remove("modal-error");
    timeIn.focus();
  }
  else {
    popup.classList.toggle("pop-up-visible");
    popup.classList.toggle("pop-up-hide");
  }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {     
      if (popup.classList.contains("pop-up-visible")) {
        popup.classList.add("pop-up-hide");
        popup.classList.remove("pop-up-visible");
        popup.classList.remove("modal-error");
      }
    }
  });

  popup.addEventListener("submit", function (evt) {
    if (!timeIn.value || !timeOut.value) {
      evt.preventDefault();     
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      localStorage.setItem("timeIn", timeIn.value);
      localStorage.setItem("timeOut", timeOut.value);
    }
  });