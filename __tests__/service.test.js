import HomoSapien from "../src/service.js";

describe('HomoSapien', () => {
  let erik;
beforeEach(() => {
    erik = new HomoSapien(31);
  });
test('should make a new HomoSapien object, return its earth years', () => {
expect(erik.earth).toEqual(31);
  });
test('should retrun Onjects earth age in mercury years. 129', () => {
expect(erik.earth).toEqual(31);
expect(erik.mercury).toEqual(129);
  });
test('should return age in Venus, Mars, and Jupiter years', () => {
expect(erik.earth).toEqual(31);
expect(erik.mercury).toEqual(129);
expect(erik.venus).toEqual(50);
expect(erik.mars).toEqual(16);
expect(erik.jupiter).toEqual(3);
  });
test('should retrun how many yeats have gone by between a past age and current age, but with other planets!', () => {
expect(erik.yearsPassed(20)).toEqual("11 Earth years have passed, 46 Mercury years have passed, 18 Venus years have gone by, 6 Mars years have gone by, 1 Jupiter years have gone by.");
  });
});