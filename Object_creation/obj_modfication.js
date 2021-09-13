/* ex.01. How to modify property values of object

let person={
    fistName: "Jalu",
    lastName: "Dhembare",
    age: 23
};
person.fistName="Jalindar";     //modifying property value.
console.log(person);

//Output: {fistName: 'Jalindar', lastName: 'Dhembare', age: 23} */
//-----------------------------------------------------------------
/* ex.02. How to add new property on existing object.

let person={
    fistName:"Jalindar",
    lastName:"Dhembare"
};
console.log(person);
person.age=23;          //adding new property.
console.log(person);

//Output:
{fistName: 'Jalindar', lastName: 'Dhembare'}
{fistName: 'Jalindar', lastName: 'Dhembare', age: 23}       */
//------------------------------------------------------------------
/* ex.03. How to delete the perticular property from object.

let person={
    fistName:"Jalindar",
    lastName:"Dhembare",
    age:23
};
console.log(person);
delete person.lastName;         //lastname deleted.
console.log(person);

//Output:
{fistName: 'Jalindar', lastName: 'Dhembare', age: 23}
{fistName: 'Jalindar', age: 23}         */
//-------------------------------------------------------------------
/* ex.04. Check perticular property is present inside object or not.

let person={
    fistName:"Jalindar",
    lastName:"Dhembare",
    age:23
};
console.log('fistName' in person);      //present >> true
console.log('height' in person);        //not present >> false

//Output:
true
false                                 */
//--------------------------------------------------------------------
/* ex.05. How to access property name one by one usig loop from object.

let person={
    fistName:"Jalindar",
    lastName:"Dhembare",
    age:23
};
for (const key in person) {                 //for-in loop.
        console.log(key);
}

//Output:
fistName
lastName
age                                     */
//--------------------------------------------------------------------
/* ex.06. Accessing properties with value from object using loop.

let person={
    fistName:"Jalindar",
    lastName:"Dhembare",
    age:23
};
for (const key in person) {                 //for-in loop.
        console.log(key+": "+person[key]);      //we can't use dot operator in loop.
}

//Output:
fistName: Jalindar
lastName: Dhembare
age: 23                     */
//---------------------------------------------------------------------