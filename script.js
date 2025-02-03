let masuk = document.querySelector("div.masuk");
span = document.getElementsByTagName("span")[0];

span.addEventListener("click", function () {
  masuk.classList.add("hapus");
});

let div = document.getElementsByTagName("div")[0];

let Random = document.getElementsByTagName("button")[0];

let h2 = document.getElementsByTagName("h2")[1];
Random.addEventListener("click", function () {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  h2.textContent = `r = ${r}, g = ${g}, b = ${b}`;
});

let slide1 = document.querySelector("input[name=sMerah]");
let slide2 = document.querySelector("input[name=sHijau]");
let slide3 = document.querySelector("input[name=sBiru]");
function updateBg() {
  let r = slide1.value;
  let g = slide2.value;
  let b = slide3.value;

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

  h2.textContent = `r = ${r}, g = ${g}, b = ${b}`;
  h2.style.color = r <= 30 || g <= 30 || b <= 30 ? "white" : "black";
}

[slide1, slide2, slide3].forEach((slider) => {
  slider.addEventListener("input", updateBg);
});
