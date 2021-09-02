var buttonsPlus = Array.from(document.getElementsByClassName("add"));
// console.log(buttonsPlus);

for (let btnPlus of buttonsPlus) {
  btnPlus.addEventListener("click", function () {
    btnPlus.nextElementSibling.innerHTML++;
    total();
  });
}

var buttonsMinus = Array.from(document.getElementsByClassName("minus"));

for (let i = 0; i < buttonsPlus.length; i++) {
  buttonsMinus[i].addEventListener("click", function () {
    if (buttonsMinus[i].previousElementSibling.innerText > 0)
      buttonsMinus[i].previousElementSibling.innerText--;
    total();
  });
}

let trash = document.getElementsByClassName("fa-trash-alt");

for (let btnTrash of trash) {
  btnTrash.addEventListener("click", function () {
    btnTrash.parentNode.remove();
  });
}

let hearts = document.getElementsByClassName("fa-heart");

for (let heart of hearts) {
  heart.addEventListener("click", function () {
    // heart.classList.toggle("red");

    if (heart.style.color === "grey") {
      heart.style.color = "red";
    } else {
      heart.style.color = "grey";
    }
  });
}
// addition
function total() {
  let a = document.getElementsByClassName("qte");
  let b = document.getElementsByClassName("price");
  let c = 0;
  for (let i = 0; i <= b.length - 1; i++) {
    c = c + b[i].innerHTML * a[i].innerHTML;
  }

  return (document.getElementById("totalp").innerHTML = c);
}
