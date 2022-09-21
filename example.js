// | The four examples below have the same observeable behavior.
// | Comparing them on jsben.ch may surprise you.

// | Example 1(IIFE). 
(function() {
    var a = 2;
    var b = 3;
    var c = 5;    
    console.log(a, b, c);
})();

// | Example 2(IIFE). 
(function(a) {
    (function (b) {
        (function (c) {
            console.log(a, b, c);
        })(5);
    })(3);
})(2);

// | Example 3(IIFE). 
(a => b => c => {
    console.log(a, b, c)
})(2)(3)(5);

// | Example 4. anonymous block(note: var persists outside of anonymous blocks, 
// |     so let is used instead).
{
    let a = 2;
    let b = 3;
    let c = 5;
    console.log(a, b, c);
}
