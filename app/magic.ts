const message = 'hello!';

function saySomething(message: string = 'default value') {
    console.log(message);
}

saySomething(message);

class Greeter {
    saySomething(msg: string = 'good day') {
        return msg;
    }
}

var greeter = new Greeter();
greeter.saySomething('something');
