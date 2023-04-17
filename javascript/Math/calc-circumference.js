function getCircumference(radius) {
  if (radius) {
    return 2 * Math.PI * radius;
  }
}

let circle1 = {
  radius: 5,
};

console.log("Circle 1 circumference :", getCircumference(circle1.radius));

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
