/* eslint-disable no-console */
export default class HomoSapien {
  constructor(age) {
    this.age = age;
  } mercuryCalc() {
    const mercuryAge = Math.round(this.age / 0.24);
    return mercuryAge;
  } venusCalc(){
    const venusAge = Math.round(this.age / .62);
    return venusAge;
  } marsCalc(){
    const marsAge = Math.round(this.age / 1.88);
    return marsAge;
  }
}


//  const input = document.getElementById('inputBtn');
// const inputBday = parseInt(input);