class Shape {
  constructor(color) {
    this.color = color;
  }

  paint() {
    console.log(`Painting with color ${this.color}`);
  }

  area() {
    throw new Error("The area method must be implemented in the subclass");
  }

  getDescription() {
    return `A shape with color ${this.color}`;
  }
}

class Rectangle extends Shape {
  constructor(length, width, color) {
    super(color);
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }
  paint() {
    return `The color of the paint is ${this.color}`;
  }

  rect() {
    console.log(
      `this is a rectangle with properties: ${this.length} , ${this.width} and ${this.color}`,
    );
    return "sup";
  }
}

const rec = new Rectangle(1, 2, "blue");
console.log(rec.rect());

const mp = new Map();
mp.set("name", "kid");
mp.set("age", 21);

console.log(mp.get("age"));

const dt = new Date();
console.log(dt.toISOString());
