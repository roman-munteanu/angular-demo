var message = 'hello!';
function saySomething(message) {
    if (message === void 0) { message = 'default value'; }
    console.log(message);
}
saySomething(message);
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.saySomething = function (msg) {
        if (msg === void 0) { msg = 'good day'; }
        return msg;
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.saySomething('something');
//# sourceMappingURL=magic.js.map