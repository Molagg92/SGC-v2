/* eslint-disable no-console */
export default class HomoSapien {
  constructor(age) {
    this.age = age;
  } mercuryCalc() {
    const mercuryAge = Math.round(this.age / 0.24);
    return mercuryAge;
  }
}


//  const input = document.getElementById('inputBtn');
// const inputBday = parseInt(input);