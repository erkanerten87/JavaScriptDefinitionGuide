// When the javascript interpreter starts or browser load a new page
// it creates a new global object

// global properties like undefined, infinity , nan
//undefined;
//Number.POSITIVE_INFINITY;

// global functions like isNan() , parseInt() and eval()

console.log("ParseInt result", parseInt(5));

// constructors like Date() , RegExp() , String() , Array()

var then = new Date(2010, 0, 1);
then.getFullYear();
then.getUTCHours();

/// global objects like Math and JSON

Math.pow(5, 2);
JSON.parse("{ value : 5 )");

/* the global object is a simply object not a class.
 there is no global constructor and there is no way to instantiate a
 new global object

 In client-side javascript the global object is a window object and
 respresnets the web browser window
 */