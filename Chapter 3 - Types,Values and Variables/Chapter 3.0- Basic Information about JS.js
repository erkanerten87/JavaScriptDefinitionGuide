/* mutable and immutable types

  -    strings,numbers, booleans , null and undefined are immutable .
  -   objects and arrays are mutable

*/

/* Numbers

  - All numbers are floating values in javascript
  - 53 bit range for numbers
  - Array indexing or bitwise operations supports 32 bits

*/
// arithmetic examples
Math.pow(2,4);
Math.ceil(.5);

//  NAN , Infinity, -Infinity -0 , 0
// Javascript language has rounding problems like the other languages
// so .2 - .1 not equals to .3 - .2


/* About length method

 var p = "π"; // π is 1 character with 16-bit codepoint 0x03c0
 var e = "e"; // e is 1 character with 17-bit codepoint 0x1d452
 p.length // => 1: p consists of 1 16-bit element
 e.length // => 2: UTF-16 encoding of e is 2 16-bit values: "\ud835\udc52"

 */
