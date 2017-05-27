/* JS objects are composite values have properties had named values

   We refer the value of property using . notation.
   When the value of property is a function we call it a method.

   when accessing a property of string, number or boolean the temporary
   objects are created from this value and returning the result from
   object method.After that this temporary objects are discarded.
   so when u change a string length property you actually change
   tempoarary objects property and it will not persist on really one.

   We called this wrapper objects.
   So you must know that adding a property or setting a propery ın
   string , number, boolean does not affect real type so they are
   read only...

   == operator treats a value and its wrapper object is equal
   === operator always use typeof so their type are different so they a
   are not equal.
*/

var s = "test";
s.len = 4;
var t = s.len;
console.log("ValueOf t:",t);

var primitiveType = "Primitive type";
var objectType = String("Primitive type");

console.log("== comparator: ", primitiveType == objectType);
console.log("=== comparator: ", primitiveType === objectType);
