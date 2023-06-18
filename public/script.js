/* Função para abrir e fechar a navbar no formato para mobile/tablet */

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// BOTÃO DE LOGIN E SIGN IN

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

/* Função de mudar de imagem na página de produto */

var mainImg = document.getElementById("imgPrincipal");
var smallImg = document.getElementsByClassName("imagemPequena");

smallImg[0].onclick = function () {
  mainImg.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
  mainImg.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  mainImg.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  mainImg.src = smallImg[3].src;
};

var closeButtons = document.querySelectorAll(".closeButton");

closeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var tr = button.closest("tr");
    tr.style.display = "none";
  });
});
