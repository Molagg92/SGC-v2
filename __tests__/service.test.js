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

describe('venusCalc', () => {
test('should retrun my current age in venus years! 50', () => {
    const erik = new HomoSapien(31);
expect(erik.venusCalc()).toEqual(50);
});
});


describe('marsCalc', () => {
test('should retrun my current age in mars years! 16', () => {
    const erik = new HomoSapien(31);
expect(erik.marsCalc()).toEqual(16);
});
});

describe('jupiterCalc', () => {
test('should retrun my current age in jupiter years! 3', () => {
    const erik = new HomoSapien(31);
expect(erik.jupiterCalc()).toEqual(3);
});
});