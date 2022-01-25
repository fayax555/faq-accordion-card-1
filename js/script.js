const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
// document
//   .querySelector(".collapsible__icon")
//   .addEventListener("click", function () {
//     document
//       .querySelector(".collapsible")
//       .classList.toggle("collapsible--expanded");
//   });
