// var a; a = 3 ; console.log(a);
var a
a
=
3
console.log(a);

/* cafeful about starting with '['  '/'  '+' '-' keywords
  use semicolon at defensive like this
*/
var x = 0;
;[x,x+1,x+2].forEach(console.log);

// General rule javascript interpreter if needed and not have ; in the end concats
// the below line after this statement like this
// var y = x+f(a+b).toString();
var y = x + f
    (a+b).toString();



// two exceptional rules for this is return and  ++ -- operators
//return
//true
// means return ; true;

x
++
y // means x; ++y; not as x++; y