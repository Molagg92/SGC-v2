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
    let venusPastMath = Math.round(yearsPassed / .62);
    let marsPastMath = Math.round(yearsPassed / 1.88);
    let jupiterPastMath = Math.round(yearsPassed / 11.86);

    return `${yearsPassed} Earth years have passed, ${mercuryPastMath} Mercury years have passed, ${venusPastMath} Venus years have gone by, ${marsPastMath} Mars years have gone by, ${jupiterPastMath} Jupiter years have gone by.`;
  }
}