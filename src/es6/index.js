//数组的解构赋值


let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log([foo, [[bar], baz]]);

function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let [first, second, third, fourth, fifth, sixth] = fibs();
console.log([first, second, third, fourth, fifth, sixth]);

//对象的结构赋值
//对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；
//而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };

console.log({ foo: baz })