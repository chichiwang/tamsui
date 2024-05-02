type dimension = string | undefined;
type dimensions = [string, string];

export const aspectRatio = 926 / 1065;

function validateMeasurement(str: string | undefined): Boolean {
  const measurementRegex = /^\d+\.?\d*[a-zA-Z%]+$/;

  if (str === undefined) {
    return false;
  }

  if (!measurementRegex.test(str)) {
    throw new Error(`
      Value: ${str} is not a valid unit of measurement.
        Please provide a string of number(s) followed by a unit of measurement (%, px, rem)
    `);
  }

  return true;
}

function calculateMeasurement(measurement: string, calculate: Function): string {
  return measurement.replace(/^\d+\.?\d*/, function applyCalculation(numStr) {
    return `${calculate(Number(numStr))}`;
  });
}

function heightFromWidth(width: number) {
  return Number((width / aspectRatio).toFixed(2));
}

function widthFromHeight(height: number) {
  return Number((height * aspectRatio).toFixed(2));
}

const defaultWidth = '926px';
const defaultHeight = calculateMeasurement(defaultWidth, heightFromWidth);

function getDimensions(width: dimension, height: dimension): dimensions {
  const isWidthUndefined = width === undefined;
  const isHeightUndefined = height === undefined;

  validateMeasurement(width);
  validateMeasurement(height);

  if (isWidthUndefined && isHeightUndefined) {
    return [defaultWidth, defaultHeight];
  }

  if (isWidthUndefined) {
    return [calculateMeasurement(height as string, widthFromHeight), height as string];
  }

  if (isHeightUndefined) {
    return [width, calculateMeasurement(width, heightFromWidth)];
  }

  return [width, height];
}

export default getDimensions;
