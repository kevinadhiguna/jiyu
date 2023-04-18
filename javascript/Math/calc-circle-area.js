function getCircleArea(radius) {
  if (radius) {
    return Math.PI * radius * radius;
  }
}

let circle1 = {
  radius: 4,
};

console.log("Circle 1 area :", getCircleArea(circle1.radius));
