
const { capitalizeTextFirstChar ,createArray, random } = require('../index1');

describe('capitalizeTextFirstChar function', () => {
  it('should return a string', () => {
    const result = capitalizeTextFirstChar("i'm ahmed ali");
    expect(typeof result).toEqual('string');
  });

  it('should capitalize the first character of every word in the string', () => {
    const result = capitalizeTextFirstChar("i'm ahmed ali");
    expect(result).toEqual("I'm Ahmed Ali");
  });
});





describe('createArray function', () => {
  it('should return an array', () => {
    const result = createArray(3);
    expect(Array.isArray(result)).toBe(true);
  });

  it('should return an array of the specified length', () => {
    const length = 2;
    const result = createArray(length);

    expect(result.length).toBe(length);
  });

  it('should include elements from 0 to length - 1', () => {
    const length = 3;
    const result = createArray(length);

    for (let i = 0; i < length; i++) {
      expect(result).toContain(i);
    }

    
    expect(result).not.toContain(length);
  });
});



 

describe('random function', () => {
  it('should return a number', () => {
    const result = random(2, 9);
    expect(typeof result).toBe('number');
  });

  it('should return a number within the specified range', () => {
    const min = 5;
    const max = 7;
    const result = random(min, max);

    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  it('should return NaN if only one parameter is provided', () => {
    const result = random(3);
    expect(isNaN(result)).toBe(true);
  });
});





