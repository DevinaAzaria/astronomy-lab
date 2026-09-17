export const WIEN_DISPLACEMENT_NM_K = 2.897771955e6;
export const LIGHT_YEARS_PER_PARSEC = 3.26156;
export const DAYS_PER_JULIAN_YEAR = 365.25;

function requirePositive(value, label) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) {
    throw new RangeError(`${label} must be a positive number.`);
  }
  return number;
}

export function temperatureFromPeakWavelength(wavelengthNm) {
  const wavelength = requirePositive(wavelengthNm, "Peak wavelength");
  return WIEN_DISPLACEMENT_NM_K / wavelength;
}

export function distanceFromModulus(apparentMagnitude, absoluteMagnitude) {
  const apparent = Number(apparentMagnitude);
  const absolute = Number(absoluteMagnitude);
  if (!Number.isFinite(apparent) || !Number.isFinite(absolute)) {
    throw new TypeError("Magnitudes must be finite numbers.");
  }
  const parsecs = 10 ** ((apparent - absolute + 5) / 5);
  return { parsecs, lightYears: parsecs * LIGHT_YEARS_PER_PARSEC };
}

export function orbitalPeriod(semiMajorAxisAu, stellarMassSolar = 1) {
  const axis = requirePositive(semiMajorAxisAu, "Semi-major axis");
  const mass = requirePositive(stellarMassSolar, "Stellar mass");
  const years = Math.sqrt(axis ** 3 / mass);
  return { years, days: years * DAYS_PER_JULIAN_YEAR };
}
