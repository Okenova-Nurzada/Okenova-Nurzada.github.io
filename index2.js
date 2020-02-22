let sections = document.querySelectorAll("section");
let linksInHeader = document.querySelectorAll("a");

for (let index = 0; index < linksInHeader.length; index++) {
    const element = linksInHeader[index];

    element.addEventListener("click", function (event) {
        event.preventDefault();

        let ide = element.getAttribute("href");
        let section = document.querySelector(ide);

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        section.className = "active";
    });
}

let inputs = document.querySelectorAll("form input");
let textarea = document.querySelector("form textarea");
let linkMailto = document.querySelector("form .btn_link");
let message = {
  firstname: "",
  address: "",
  messageBody: ""
};

linkMailto.addEventListener("click", () => {
  if (
    message.firstname.length > 0 &&
    message.address.length > 0 &&
    message.messageBody.length > 0
  ) {
    linkMailto.href =
      "mailto:nura.okenova@gmail.com?subject=" +
      message.messageTitle +
      "&amp;&body=" +
      message.messageBody;
  }
});

textarea.addEventListener("input", () => {
  message.messageBody = textarea.value;
  checkingInputs(textarea);
});

inputs.forEach(input => {
  input.addEventListener("input", () => {
    setMessage(input);
    checkingInputs(input);
  });
});

function setMessage(input) {
  if (input.name === "input_firstname") {
    message.firstname = input.value;
  } else if (input.name === "input_address") {
    message.address = input.value;
  
  }
}

