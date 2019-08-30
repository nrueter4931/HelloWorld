var HelloWorld = (function () {
    function HelloWorld(name) {
        this.fullName = name;
    }
    HelloWorld.prototype.sayHello = function () {
        console.log('Hello World! ' + 'My name is ' + this.fullName + '.');
    };
    return HelloWorld;
})(); // end of class
var myHelloInstance = new HelloWorld('Nick Rueter');
myHelloInstance.sayHello();
