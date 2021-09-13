/* ex.01. creating & accesing object method.

let person={
    fistName:"Jalindar",
    age:23
};

person.test= function()             //test is object method.
             {
                 console.log("Welcome");
             }

person.test();          //calling object method (paranthesis must me there.)

//Output: Welcome               */
//-----------------------------------------------------------------------------
/* ex.02. creating & accesing object method.

let person={
    fistName:"Jalindar",
    age:23
};

function greet()
{
    console.log("Hello");
}

person.test=greet;           //test is object method.

person.test();              //calling object method (paranthesis must me there.)

//Output: Hello             */
//-------------------------------------------------------------------------------
/* ex.03. creating & accesing object method.

let person={
    fistName:"Jalindar",
    age:23,
    test: function()
          {
              console.log("welcome");
          }
};
person.test();

//Output: welcome               */
//--------------------------------------------------------------------------------
/* ex.04. In ES6, creating & accesing object method.

let person={
    fistName:"Jalindar",
    age:23,
    test()          //in ES6, we can remove function keyword also.
          {
              console.log("welcome123");
          }
};
person.test();
//Output: welcome123               */
//--------------------------------------------------------------------------------
/* ex.05. "this" keyword in object.

let person={
    fistName:"Jalindar",
    age:23,
    test()        
    {
        console.log(`Hello, I am ${this.fistName} and I have ${car.brand} car.`);
    }
};

let car={
    brand:"tata",
    model:"nexOn"
};

person.test();

//Output: Hello, I am Jalindar and I have tata car.             */
//--------------------------------------------------------------------------------