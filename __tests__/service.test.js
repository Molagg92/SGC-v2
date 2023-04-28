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
});