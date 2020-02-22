let arrayColor = ["pink", "green"];
let sections = document.querySelectorAll("section");

let links = document.querySelectorAll("a");

for (let index = 0; index < links.length; index++) {
  const element = links[index];

  element.addEventListener("click", function(event) {
    event.preventDefault();

    let blockId = element.getAttribute("href"); // #home
    let section = document.querySelector(blockId);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

for (let index = 0; index < sections.length; index++) {
  const element = sections[index];

  element.style.backgroundColor = arrayColor[index];
}