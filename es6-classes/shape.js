/* exported Shape */
class Shape {
  constructor(area, circumference) {
    this.area = area;
    this.circumference = circumference;
  }

  print() {
    return `The area is ${this.area}. The circumference is ${this.circumference}.`;
  }
}

const newShape = new Shape(24, 30);

console.log('newShape:', newShape.print());
