// | The three examples below are three ways of saying the same thing.

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
    console.log(a,b,c)
)(2)(3)(5);