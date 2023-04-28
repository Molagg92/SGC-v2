/* eslint-disable no-console */
export default class HomoSapien {
  constructor(age) {
    this.earth = age;
    let mercuryAge = Math.round(age / .24);

    this.mercury = mercuryAge;
  }
}