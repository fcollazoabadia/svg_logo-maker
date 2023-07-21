const { Shape, Triangle, Circle, Square } = require('../lib/shapes');

describe('Shape', () => {
  it('should assign a color to the shape', () => {
    const shape = new Shape();
    shape.setColor('red');
    expect(shape.color).toEqual('red');
  });
});

describe('Shape', () => {
  it('should generate a blue triangle', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    const expect = `<polygon points="150,50 50,150 250,150" style="fill:blue"/>`;
    expect(shape.render()).toEqual('expected');
  });
});

describe('Shape', () => {
  it('should generate a green circle', () => {
    const shape = new Circle();
    shape.setColor('green');
    const expect = `<circle cx="150" cy="100" r="75" style="fill:green"/>`;
    expect(shape.render()).toEqual('expected');
  });
});

describe('Shape', () => {
  it('should generate a yellow square', () => {
    const shape = new Square();
    shape.setColor('yellow');
    const expect = `<rect x="50" y="50" width="200" height="200" style="fill:yellow"/>`;
    expect(shape.render()).toEqual('expected');
  });
});