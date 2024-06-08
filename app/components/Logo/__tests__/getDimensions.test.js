import getDimensions, { aspectRatio } from '../getDimensions';

describe('getDimensions', () => {
  test('default export is a function', () => {
    expect(getDimensions).toEqual(expect.any(Function));
  });

  test('exports aspectRatio for external use', () => {
    expect(aspectRatio).toEqual(expect.any(Number));
  });

  test('returns default width and height if neither dimension provided', () => {
    const [width, height] = getDimensions();

    expect(width).toBe('926px');
    expect(height).toBe('1065px');
  });

  test('throws an error if the provided dimensions are invalid measurement strings', () => {
    const badWidth1 = '55';
    const badWidth2 = 'not a measurement';
    const goodWidth = '101px';
    const badHeight1 = '42.37';
    const badHeight2 = 'rem17';
    const goodHeight = '8%';

    expect(() => getDimensions(badWidth1, undefined)).toThrow(badWidth1);
    expect(() => getDimensions(badWidth1, badHeight1)).toThrow(badWidth1);
    expect(() => getDimensions(badWidth2, goodHeight)).toThrow(badWidth2);
    expect(() => getDimensions(undefined, badHeight1)).toThrow(badHeight1);
    expect(() => getDimensions(goodWidth, badHeight2)).toThrow(badHeight2);
  });

  test('calculates height if not provided', () => {
    const widthValue = 34.25576;
    const expectedHeightValue = Number((widthValue / aspectRatio).toFixed(2));
    const width1 = `${widthValue}px`;
    const width2 = `${widthValue}%`;
    const width3 = `${widthValue}someOtherUnit`;

    const [actualWidth1, height1] = getDimensions(width1);
    const [actualWidth2, height2] = getDimensions(width2);
    const [actualWidth3, height3] = getDimensions(width3, undefined);

    expect(actualWidth1).toBe(width1);
    expect(actualWidth2).toBe(width2);
    expect(actualWidth3).toBe(width3);

    expect(height1).toBe(`${expectedHeightValue}px`);
    expect(height2).toBe(`${expectedHeightValue}%`);
    expect(height3).toBe(`${expectedHeightValue}someOtherUnit`);
  });

  test('calculates width if not provided', () => {
    const heightValue = 12;
    const expectedWidthValue = Number((heightValue * aspectRatio).toFixed(2));
    const height1 = `${heightValue}rem`;
    const height2 = `${heightValue}%`;
    const height3 = `${heightValue}stories`;

    const [width1, actualHeight1] = getDimensions(undefined, height1);
    const [width2, actualHeight2] = getDimensions(undefined, height2);
    const [width3, actualHeight3] = getDimensions(undefined, height3);

    expect(actualHeight1).toBe(height1);
    expect(actualHeight2).toBe(height2);
    expect(actualHeight3).toBe(height3);

    expect(width1).toBe(`${expectedWidthValue}rem`);
    expect(width2).toBe(`${expectedWidthValue}%`);
    expect(width3).toBe(`${expectedWidthValue}stories`);
  });

  test('returns both dimensions when both arguments are valid measurements', () => {
    const width1 = '325px';
    const width2 = '50%';
    const width3 = '1mississippi';
    const height1 = '1337speak';
    const height2 = '6in';
    const height3 = '20toLife';

    const [actualWidth1, actualHeight1] = getDimensions(width1, height1);
    const [actualWidth3, actualHeight2] = getDimensions(width3, height2);
    const [actualWidth2, actualHeight3] = getDimensions(width2, height3);

    expect(actualWidth1).toBe(width1);
    expect(actualWidth2).toBe(width2);
    expect(actualWidth3).toBe(width3);

    expect(actualHeight1).toBe(height1);
    expect(actualHeight2).toBe(height2);
    expect(actualHeight3).toBe(height3);
  });
});
