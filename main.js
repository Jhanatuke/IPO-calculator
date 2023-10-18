// IPO Calculator

// button event listener

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let a = +document.getElementById("a").value;
  let b = +document.getElementById("b").value;
  let h = +document.getElementById("h").value;

  let area = 0.5 * (a + b) * h;

  document.getElementById("area1").innerHTML = area;
}
