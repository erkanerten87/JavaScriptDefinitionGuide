// Console
console.log('Hello World');

// Objects
var book = {

    topic : "Java script" ,
    fat : true
};

console.log(book.topic);
console.log(book["fat"]);

// arrays
var primes = [2,5,7];
console.log(primes.length);

// functions
// defining a function
var square = function (x) {
    return x*x;
};

square(25);

var a = [];
a.push(1,2,3);
a.reverse();

var points = [
{ x:0 , y:0 },
{ x:1, y:1}
];
// defining a instance nethod
points.dist = function () {
    var p1 = this[0];
    var p2 = this[1];

    var a = p2.x - p1.x;
    var b = p2.y - p1.y;

    return Math.sqrt(a*a - b*b);
};
// defining a constructer starts with capitals letters
console.log("defining a constructer starts with capitals letters");
function Point(x,y) {
    this.x = x;
    this.y = y;
}
// defining a class method
Point.prototype.r = function () {
    return Math.sqrt(this.x * this.x +
                     this.y * this.y )
};
// using a object constructor and method
var myPoint = new Point(1,1);
console.log("a.r",myPoint.r());


