/* eslint-disable no-console */
import './css/styles.css';
import HomoSapien from "./service.js";

function galaxyCalculator(e) {
  e.preventDefault();
  const userAge = parseInt(document.querySelector("#userAge").value);
  const userAgeReturn = new HomoSapien(userAge);
  document.querySelector("#response").innerText = null;
  const merc = document.createElement("p");
  merc.append(userAgeReturn.mercury);
  const ven = document.createElement("p");
  ven.append(userAgeReturn.venus);
  const mars = document.createElement("p");
  mars.append(userAgeReturn.mars);
  const jup = document.createElement("p");
  jup.append(userAgeReturn.jupiter);
  document.querySelector("#response").append(merc);
  document.querySelector("#response").append("Venus age:");
  document.querySelector("#response").append(ven);
  document.querySelector("#response").append("Mars age:");
  document.querySelector("#response").append(mars);
  document.querySelector("#response").append("Jupiter age:");
  document.querySelector("#response").append(jup);
}

function PastCalc(e) {
  e.preventDefault();
  const currentAge = parseInt(document.querySelector("#currentAge").value);
  const pastYears = new HomoSapien(currentAge);
  const pastAge = parseInt(document.querySelector("#pastAge").value);
  document.querySelector("#response2").innerText = null;
  document.querySelector("#response2").append(pastYears.yearsPassed(pastAge));
}
function FutureCalc(e) {
  e.preventDefault();
  const currentAge2 = parseInt(document.querySelector("#currentAge2").value);
  const futureYears = new HomoSapien(currentAge2);
  const futureAge = parseInt(document.querySelector("#futureAge").value);
  document.querySelector("#response3").innerText = null;
  document.querySelector("#response3").append(futureYears.yearsToGo(futureAge));
}

window.addEventListener("load", function () {
  document.querySelector("#UserForm").addEventListener("submit", galaxyCalculator);
  this.document.querySelector("#pastForm").addEventListener("submit", PastCalc);
  this.document.querySelector("#futureForm").addEventListener("submit", FutureCalc);
});