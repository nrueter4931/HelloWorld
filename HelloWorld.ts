

class HelloWorld {

    public firstName: string;
    public lastName: string;

    constructor(first: string, last: string) {
        this.firstName = first;
        this.lastName = last;

    }

    sayHello(){
        console.log('Hello World! ' + 'My name is ' + this.firstName + ' ' + this.lastName)
    }
} // end of class

const myHelloInstance = new HelloWorld('Nick', 'Rueter');

myHelloInstance.sayHello();