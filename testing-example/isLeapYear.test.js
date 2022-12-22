const isLeapYear = require('./isLeapYear');

describe('isLeapYear', () => {
  describe('positive', () => {
    test('2008-true', () => {
      const result = isLeapYear(2008);
      expect(result).toEqual(true);
    });

    test('2003-false', () => {
      const result = isLeapYear(2003);
      expect(result).toEqual(false);
    });

    it('should return true when is called with 2000', () => {
      const result = isLeapYear(2000);
      expect(result).toEqual(true);
    });
  });

  describe('negative', () => {
    it('should return error(Year must be integer) when is called with a float', () => {
      expect(() => isLeapYear(2008.4)).toThrow('Year must be integer');
    });

    it('should return error(Year must exist) when is called with an undefied', () => {
      expect(() => isLeapYear()).toThrow('Year must exist');
    });
  });
});
