let btns = document.getElementsByClassName("btns");
let cards = document.querySelectorAll(".card");

function mufunc(element) {
  for (var k = 0; k < btns.length; k++) {
    btns[k].classList.remove("active");
  }
  element.classList.add("active");

  let datafilter = element.getAttribute("data-filter");
  for (var j = 0; j < cards.length; j++) {
    cards[j].classList.remove("show");
    cards[j].style.display = "none";
    if (
      cards[j].getAttribute("data-set") == datafilter ||
      datafilter == "all"
    ) {
      cards[j].style.display = "block";
    }
  }
}
