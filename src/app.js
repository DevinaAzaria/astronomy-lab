import { distanceFromModulus, orbitalPeriod, temperatureFromPeakWavelength } from "./astronomy.js";

const number = new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 });

function show(outputId, work) {
  const output = document.querySelector(outputId);
  try {
    output.value = work();
    output.classList.remove("error");
  } catch (error) {
    output.value = error.message;
    output.classList.add("error");
  }
}

document.querySelector('[data-calculate="wien"]').addEventListener("click", () => {
  show("#wien-result", () => `${number.format(temperatureFromPeakWavelength(document.querySelector("#wavelength").value))} K`);
});

document.querySelector('[data-calculate="distance"]').addEventListener("click", () => {
  show("#distance-result", () => {
    const result = distanceFromModulus(document.querySelector("#apparent").value, document.querySelector("#absolute").value);
    return `${number.format(result.parsecs)} pc · ${number.format(result.lightYears)} ly`;
  });
});

document.querySelector('[data-calculate="kepler"]').addEventListener("click", () => {
  show("#kepler-result", () => {
    const result = orbitalPeriod(document.querySelector("#axis").value, document.querySelector("#mass").value);
    return `${number.format(result.years)} years · ${number.format(result.days)} days`;
  });
});
