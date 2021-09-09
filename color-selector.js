"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  //Generate random hexadecimal number between 000000 and ffffff
  const randomHex = getRandomHex();

  //Change the value of input before initialisation
  setRandomHex(randomHex);

  //Add event listeners for changing harmony and colour
  document.querySelector("input").addEventListener("input", getChosenColour);
  document.querySelector("select").addEventListener("input", getChosenColour);
});

function getRandomHex() {
  return Math.floor(Math.random() * 16777216).toString(16);
}

function setRandomHex(randomHex) {
  //Set randomly generated hex code as input value
  document.querySelector("input").value = `#${randomHex}`;

  //Call function on load to get the randomly generated colour harmony
  getChosenColour();
}

function getChosenColour() {
  //Retrieve current colour hexcode
  const hex = getHex();
  const rgb = convertHEXtoRGB(hex);
  const hsl = convertRGBtoHSL(rgb);

  //Display colour and info
  displayColourInfo(hex, rgb, hsl, "3");

  //Get other colours
  getOtherColours(hsl);
}

function getOtherColours(hsl) {
  //Get chosen harmony
  const harmony = getHarmony();

  getColour1(hsl, harmony);
  getColour2(hsl, harmony);
  getColour4(hsl, harmony);
  getColour5(hsl, harmony);
}

function getColour1(hsl, harmony) {
  const hsl1 = {};

  //Get colour 1
  if (harmony === "Analogous") {
    hsl1.h = calcDegrees(hsl.h - 30);
    hsl1.s = hsl.s;
    hsl1.l = hsl.l;
  } else if (harmony === "Monochromatic") {
    hsl1.h = hsl.h;
    hsl1.s = hsl.s;
    hsl1.l = calcPercentage(hsl.l - 10);
  } else if (harmony === "Triad") {
    hsl1.h = calcDegrees(hsl.h - 60);
    hsl1.s = hsl.s;
    hsl1.l = calcPercentage(hsl.l + 10);
  } else if (harmony === "Complementary") {
    hsl1.h = hsl.h;
    hsl1.s = hsl.s;
    hsl1.l = calcPercentage(hsl.l - 10);
  } else if (harmony === "Compound") {
    hsl1.h = calcDegrees(hsl.h - 30);
    hsl1.s = hsl.s;
    hsl1.l = hsl.l;
  } else if (harmony === "Shades") {
    hsl1.h = hsl.h;
    hsl1.s = hsl.s;
    hsl1.l = calcPercentage(hsl.l - 30);
  }

  //Call function to get other colour info
  getColourInfo(hsl1, "1");
}

function getColour2(hsl, harmony) {
  const hsl2 = {};
  //Get colour 2
  if (harmony === "Analogous") {
    hsl2.h = calcDegrees(hsl.h - 15);
    hsl2.s = hsl.s;
    hsl2.l = hsl.l;
  } else if (harmony === "Monochromatic") {
    hsl2.h = hsl.h;
    hsl2.s = calcPercentage(hsl.s - 15);
    hsl2.l = hsl.l;
  } else if (harmony === "Triad") {
    hsl2.h = calcDegrees(hsl.h - 60);
    hsl2.s = hsl.s;
    hsl2.l = hsl.l;
  } else if (harmony === "Complementary") {
    hsl2.h = hsl.h;
    hsl2.s = calcPercentage(hsl.s - 10);
    hsl2.l = calcPercentage(hsl.l + 10);
  } else if (harmony === "Compound") {
    hsl2.h = calcDegrees(hsl.h + 30);
    hsl2.s = hsl.s;
    hsl2.l = hsl.l;
  } else if (harmony === "Shades") {
    hsl2.h = hsl.h;
    hsl2.s = hsl.s;
    hsl2.l = calcPercentage(hsl.l - 15);
  }
  //Call function to get other colour info
  getColourInfo(hsl2, "2");
}

function getColour4(hsl, harmony) {
  const hsl4 = {};

  //Get colour 4
  if (harmony === "Analogous") {
    hsl4.h = calcDegrees(hsl.h + 15);
    hsl4.s = hsl.s;
    hsl4.l = hsl.l;
  } else if (harmony === "Monochromatic") {
    hsl4.h = hsl.h;
    hsl4.s = calcPercentage(hsl.s + 15);
    hsl4.l = hsl.l;
  } else if (harmony === "Triad") {
    hsl4.h = calcDegrees(hsl.h + 60);
    hsl4.s = hsl.s;
    hsl4.l = hsl.l;
  } else if (harmony === "Complementary") {
    hsl4.h = calcDegrees(hsl.h + 180);
    hsl4.s = hsl.s;
    hsl4.l = hsl.l;
  } else if (harmony === "Compound") {
    hsl4.h = calcDegrees(hsl.h + 160);
    hsl4.s = hsl.s;
    hsl4.l = hsl.l;
  } else if (harmony === "Shades") {
    hsl4.h = hsl.h;
    hsl4.s = hsl.s;
    hsl4.l = calcPercentage(hsl.l + 15);
  }
  //Call function to get other colour info
  getColourInfo(hsl4, "4");
}

function getColour5(hsl, harmony) {
  const hsl5 = {};

  //Get colour 5
  if (harmony === "Analogous") {
    hsl5.h = calcDegrees(hsl.h + 30);
    hsl5.s = hsl.s;
    hsl5.l = hsl.l;
  } else if (harmony === "Monochromatic") {
    hsl5.h = hsl.h;
    hsl5.s = hsl.s;
    hsl5.l = calcPercentage(hsl.l + 10);
  } else if (harmony === "Triad") {
    hsl5.h = calcDegrees(hsl.h + 30);
    hsl5.s = hsl.s;
    hsl5.l = calcPercentage(hsl.l - 10);
  } else if (harmony === "Complementary") {
    hsl5.h = calcDegrees(hsl.h + 180);
    hsl5.s = hsl.s;
    hsl5.l = calcPercentage(hsl.l + 20);
  } else if (harmony === "Compound") {
    hsl5.h = calcDegrees(hsl.h + 200);
    hsl5.s = hsl.s;
    hsl5.l = hsl.l;
  } else if (harmony === "Shades") {
    hsl5.h = hsl.h;
    hsl5.s = hsl.s;
    hsl5.l = calcPercentage(hsl.l + 30);
  }
  //Call function to get other colour info
  getColourInfo(hsl5, "5");
}

function getColourInfo(hsl, number) {
  //Get rgb and hex from hsl
  const rgb = convertHSLtoRGB(hsl);
  const hex = convertRGBtoHEX(rgb);

  displayColourInfo(hex, rgb, hsl, number);
}

function displayColourInfo(hex, rgb, hsl, number) {
  //Display colour block
  displayColour(hex, number);

  //Display colour codes
  displayHex(hex, number);
  displayRGB(rgb, number);
  displayHSL(hsl, number);

  changeFontColour(rgb, number);
}

function changeFontColour(rgb, number) {
  //Get all p-tags within given colours div
  document.querySelectorAll(`.display${number} p`).forEach((text) => {
    //Calculate luminance from rgb's values
    const luminance = getLuminance(rgb);

    //Make the given colour's text black or white based on luminance
    if (luminance > 150) {
      text.style.color = "black";
    } else {
      text.style.color = "white";
    }
  });
}

function getLuminance(rgb) {
  //Calculate and return luminance
  return Math.round(rgb.r * 0.2126 + rgb.g * 0.7152 + rgb.b * 0.0722);
}

function getHarmony() {
  return document.querySelector("select").value;
}

function getHex() {
  return document.querySelector("input").value.toUpperCase();
}

function displayColour(hex, number) {
  document.querySelector(
    `.display${number} .display-colour`
  ).style.backgroundColor = hex;
}

function displayHex(hex, number) {
  document.querySelector(
    `.display${number} .display-hex`
  ).textContent = `HEX: ${hex}`;
}

function displayRGB(rgb, number) {
  document.querySelector(
    `.display${number} .display-rgb`
  ).textContent = `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;
}

function displayHSL(hsl, number) {
  document.querySelector(
    `.display${number} .display-hsl`
  ).textContent = `HSL: ${hsl.h}°, ${hsl.s}%, ${hsl.l}%`;
}

function calcDegrees(number) {
  //Adjust degree values above 360 to restart from 0 and vice versa
  if (number < 0) {
    return number + 360;
  } else if (number > 359) {
    return number - 360;
  } else {
    return number;
  }
}

function calcPercentage(number) {
  //Hardcap percentage values at top to 100 and bottom to 0
  if (number < 0) {
    return 0;
  } else if (number > 100) {
    return 100;
  } else {
    return number;
  }
}

function convertRGBtoHEX(rgb) {
  //Create new array
  const newRGB = {};

  //Iterate through the rgb object values to ensure only double digit hexadecimals
  for (let value in rgb) {
    newRGB[value] = rgb[value].toString(16).padStart(2, "0").toUpperCase();
  }

  //Return hexcode
  return `#${newRGB.r}${newRGB.g}${newRGB.b}`;
}

function convertHEXtoRGB(hex) {
  //Parse integers from hexadecimal to decimal
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);

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

function convertHSLtoRGB(hsl) {
  let h = hsl.h;
  let s = hsl.s / 100;
  let l = hsl.l / 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;
  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  //Return decimal rgb values as an object
  return {
    r,
    g,
    b,
  };
}
