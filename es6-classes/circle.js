/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(Math.PI * radius * radius, 2 * Math.PI * radius);
    this.radius = radius;
  }

  print() {
    return `${super.print()} and the radius is ${this.radius}`;
  }
}

const newCircle = new Circle(2);

console.log('newCircle:', newCircle.print());
