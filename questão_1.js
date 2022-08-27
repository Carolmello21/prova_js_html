const $form = document.querySelector("form");
const $lado1 = document.querySelector("#lado1");
const $lado2 = document.querySelector("#lado2");
const $lado3 = document.querySelector("#lado3");

function compararLados() {
  const lado1 = $lado1.value;
  const lado2 = $lado2.value;
  const lado3 = $lado3.value;

  if (lado1 < (lado2 + lado3) && lado2 < (lado1 + lado3) && lado3 < (lado1 + lado2)) {
    createAlert("Insira os valores de lado1, lado2 e lado3");
  } else if (lado1 == lado2 && lado2 == lado3) {
    createAlert("Esse triângulo é equilátero!");
  } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
    createAlert("Esse triângulo é isósceles");
  } else {
    createAlert("Esse triângulo é escaleno");
  }
}

function createAlert(msg) {
  document
    .querySelector("body")
    .insertAdjacentHTML("beforebegin", `<div class='alert'>${msg}</div>`);

  setTimeout(function () {
    deleteAlert();
  }, 3000);
}

function deleteAlert() {
  const list = document.querySelectorAll(".alert");
  for (const item of list) {
    item.remove();
  }
}

$form.addEventListener("submit", function (event) {
  event.preventDefault();
  compararLados();
});
