const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener('click',function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// const collapsible = document.querySelector('.collapsible');

// collapsible.addEventListener('click',function () {
//   this.classList.toggle('collapsible--expanded');
//   // console.log("clicked");
// })
