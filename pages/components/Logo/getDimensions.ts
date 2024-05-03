type dimension = string | undefined;
type dimensions = [string, string];
type measurementTransform = (m: number) => number;
type transformApply = (s: string) => string;

export const aspectRatio = 926 / 1065;

function isMeasurementValid(str: string | undefined): Boolean {
  const measurementRegex = /^\d+\.?\d*[a-zA-Z%]+$/;
  const isStrUndefined = str === undefined;

  if (!isStrUndefined && !measurementRegex.test(str)) {
    return false;
  }

  return true;
}

function transformMeasurementWith(measurementTransformer: measurementTransform): transformApply {
  return function applyTransformerTo(measurement: string): string {
    return measurement.replace(/^\d+\.?\d*/, function applyCalculation(numStr) {
      return `${measurementTransformer(Number(numStr))}`;
    });
  };
}

const getHeightFromWidth = transformMeasurementWith(function widthToHeight(width: number): number {
  return Number((width / aspectRatio).toFixed(2));
});

const getWidthFromHeight = transformMeasurementWith(function heightToWidth(height: number): number {
  return Number((height * aspectRatio).toFixed(2));
});

function throwMeasurementValidation(invalidMeasurement: string) {
  throw new Error(`
    Value: ${invalidMeasurement} is not a valid unit of measurement.
      Please provide a string of number(s) followed by a unit of measurement (%, px, rem)
  `);
}

const defaultWidth = '926px';
const defaultHeight = getHeightFromWidth(defaultWidth);

function getDimensions(width: dimension, height: dimension): dimensions {
  const isWidthUndefined = width === undefined;
  const isHeightUndefined = height === undefined;

  [width, height].forEach(function validateDimension(dim) {
    if (!isMeasurementValid(dim)) {
      throwMeasurementValidation(dim as string);
    }
  });

  if (isWidthUndefined && isHeightUndefined) {
    return [defaultWidth, defaultHeight];
  }

  if (isWidthUndefined) {
    return [getWidthFromHeight(height as string), height as string];
  }

  if (isHeightUndefined) {
    return [width, getHeightFromWidth(width)];
  }

  return [width, height];
}

export default getDimensions;
