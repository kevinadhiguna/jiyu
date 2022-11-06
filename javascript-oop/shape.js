class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    const perimeter = this.sides * this.sideLength; 
    console.log(`${this.name} perimeter is ${perimeter}`);
  }
}

const square = new Shape('square', 4, 5);
square.calcPerimeter();

const equilateralTriangle = new Shape('triangle', 3, 3);
equilateralTriangle.calcPerimeter();

class Square extends Shape {
  constructor(sideLength) {
    super('square', 4, sideLength);

    // super(Shape);
    // this.name = "square";
    // this.sides = 4;
    // this.sideLength = sideLength;
  }

  calcArea() {
    // const area = this.sideLength * this.sideLength;
    // console.log(`${this.name} area is ${area}`);

    console.log(`${this.name} area is `, Math.pow(this.sideLength, 2));
  }
}

const anotherSquare = new Square(7);
anotherSquare.calcArea();
