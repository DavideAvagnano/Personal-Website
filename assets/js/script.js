// Header class (effect when scroll)
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 140);
});

// Email JS
function SendMail() {
  var params = {
    from_name: document.getElementById("name_id").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_jl3bvrh", "template_lu6jk0n", params)
    .then(function (res) {
      alert("Success! " + res.status);
    });
}

// Mobile menu
let menu = document.querySelector("#menu-icon");
let nav = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  nav.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  nav.classList.remove("open");
};
