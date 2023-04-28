import HomoSapien from "../src/service.js";

describe('HomoSapien', () => {
test('should return erik as 30 and 1992', () => {
    const erik = new HomoSapien(30);
expect(erik.age).toEqual(30);
});
});


describe('mercuryCalc', () => {
test('should retrun my current age in mercury years! 129', () => {
    const erik = new HomoSapien(31);
expect(erik.mercuryCalc()).toEqual(129);
});
});