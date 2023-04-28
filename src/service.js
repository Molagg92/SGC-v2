/* eslint-disable no-console */
export default class HomoSapien {
  constructor(age) {
    this.earth = age;
    let mercuryAge = Math.round(age / .24);
    let venusAge = Math.round(age / .62);
    let marsAge = Math.round(age / 1.88);
    let jupiterAge = Math.round(age / 11.86);


    this.mercury = mercuryAge;
    this.venus = venusAge;
    this.mars = marsAge;
    this.jupiter = jupiterAge;
  } yearsPassed(pastAge) {
    let yearsPassed = this.earth - pastAge;
    let mercuryPastMath = Math.round(yearsPassed / .24);


    return `${yearsPassed} Earth years have passed, ${mercuryPastMath} Mercury years have passed.`;
  }
}