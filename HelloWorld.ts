

class HelloWorld {

    constructor(public firstName: string, public lastName: string) {

    }

    sayHello(){
        console.log('Hello World! ' + 'My name is ' + this.firstName + this.lastName + '.')
    }
} // end of class

const myHelloInstance = new HelloWorld('Nick', 'Rueter');

myHelloInstance.sayHello();