import test from "node:test";
import assert from "node:assert/strict";
import { distanceFromModulus, orbitalPeriod, temperatureFromPeakWavelength } from "../src/astronomy.js";

test("Wien's law approximates the Sun's temperature", () => {
  assert.ok(Math.abs(temperatureFromPeakWavelength(500) - 5795.54) < 0.01);
});

test("distance modulus of five equals 100 parsecs", () => {
  const result = distanceFromModulus(5, 0);
  assert.equal(result.parsecs, 100);
  assert.ok(Math.abs(result.lightYears - 326.156) < 0.001);
});

test("Earth-like orbit around one solar mass takes one year", () => {
  assert.deepEqual(orbitalPeriod(1, 1), { years: 1, days: 365.25 });
});

test("physical inputs must be positive", () => {
  assert.throws(() => orbitalPeriod(0, 1), RangeError);
  assert.throws(() => temperatureFromPeakWavelength(-20), RangeError);
});
