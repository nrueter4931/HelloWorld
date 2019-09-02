var HelloWorld = (function () {
    function HelloWorld(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    HelloWorld.prototype.sayHello = function () {
        console.log('Hello World! ' + 'My name is ' + this.firstName + this.lastName + '!');
    };
    return HelloWorld;
})(); // end of class
var myHelloInstance = new HelloWorld('Nick', 'Rueter');
myHelloInstance.sayHello();
