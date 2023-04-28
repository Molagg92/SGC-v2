/* eslint-disable no-console */
import './css/styles.css';
import HomoSapien from "./service.js";

window.addEventListener("load", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) { galaxyCalculator(e); });
});
function galaxyCalculator(e) {
  e.preventDefault();
  const input = document.getElementById('inputBtn').value;
  
  console.log(erik.mercuryCalc());
  console.log (input);
}
const erik = new HomoSapien (31);