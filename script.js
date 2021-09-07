"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  document.querySelector("input").addEventListener("input", showColourInfo);
});

function showColourInfo() {
  //Retrieve current colour hexcode
  const hex = getHex();
  const rgb = convertHEXtoRGB(hex);
  const hsl = convertRGBtoHSL(rgb);
  const css = convertRGBtoCSS(rgb);

  //Display color block
  displayColor(css);

  //Display colour codes
  displayHex(hex);
  displayRGB(rgb);
  displayHSL(hsl);
}

function getHex() {
  return document.querySelector("input").value.toUpperCase();
}

function displayColor(css) {
  document.querySelector("#display-color").style.backgroundColor = css;
}

function displayHex(hex) {
  document.querySelector("#display-hex").textContent = `HEX: ${hex}`;
}

function displayRGB(rgb) {
  document.querySelector(
    "#display-rgb"
  ).textContent = `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;
}

function displayHSL(hsl) {
  document.querySelector(
    "#display-hsl"
  ).textContent = `HSL: ${hsl.h}, ${hsl.s}%, ${hsl.l}%`;
}

function convertHEXtoRGB(hex) {
  //Parse integers from hexadecimal to decimal
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5), 16);

  //Return decimal rgb values as an object
  return {
    r,
    g,
    b,
  };
}

function convertRGBtoHSL(rgb) {
  let r = rgb.r;
  let g = rgb.g;
  let b = rgb.b;

  r /= 255;
  g /= 255;
  b /= 255;

  let h, s, l;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  //Multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  //Return hsl values as an object
  return {
    h: Math.round(h),
    s: Math.round(s),
    l: Math.round(l),
  };
}

function convertRGBtoCSS(rgb) {
  return `rgb(${rgb.r},${rgb.g},${rgb.b})`;
}
