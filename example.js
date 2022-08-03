// | The four examples below have the same observeable behavior.
// | Comparing them on jsben.ch may surprise you.

// | Example 1. 
(function() {
    var a = 2;
    var b = 3;
    var c = 5;    
    console.log(a, b, c);
})();

// | Example 2. 
(function(a) {
    (function (b) {
        (function (c) {
            console.log(a, b, c);
        })(5);
    })(3);
})(2);

// | Example 3. 
(a => b => c => {
    console.log(a, b, c)
})(2)(3)(5);

// | Example 4. anonymous scope.
{
    var a = 2;
    var b = 3;
    var c = 5;
    console.log(a, b, c);
}
