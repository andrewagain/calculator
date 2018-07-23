const Foo = function Foo() {}
Foo.prototype.name = 'foo'
console.log(Foo.name) // 'foo'

const foo = new Foo();
console.log(foo.name) // 'foo'

class Bar {
  constructor() {
    Bar.prototype.name = 'bar';
  }
}

console.log(Bar.name);

const bar = new Bar();
console.log(bar.name);
