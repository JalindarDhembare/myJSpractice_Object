/* ex.01. object creation.

let person={};
console.log(person);

//Output: {}    */
//-----------------------------------------------
/* ex.02. object creation & accessing properties.

let person={
            fistName:"Jalindar",
            lastName:"Dhembare"
           };
console.log(person.fistName);//accessing value
console.log(person.lastName);

console.log(person['fistName']);//accessing value using array natation.
console.log(person['lastName']);

//Output: 
Jalindar
Dhembare
Jalindar
Dhembare            */
//-----------------------------------------------
/* ex.03. object creation using new keyword.

let person=new Object();
console.log(person);
person.fistName="Jalu";
person.lastName="Dhembare";
console.log(person.fistName);
console.log(person.lastName);
console.log(person);

//Output:
{}
Jalu
Dhembare
{fistName: 'Jalu', lastName: 'Dhembare'}        */
//------------------------------------------------------------------
/* ex.04. object creation and accessing value using array notation.

let person={
            'fistName':'Jalu',
            'age':23
           };
console.log(person.fistName);
console.log(person.age);
console.log(person['fistName']);    //array notation.

//Output:
Jalu
23
Jalu            */
//-------------------------------------------------------------------
/* ex.05. object creation & accesing property not present in object.

let person={
            fistName:"Jalindar"
           };
console.log(person.age);    //age property not present in object.

//Output: undefined             */
//------------------------------------------------------------------
/* ex.06. object creation & acccesing whole object properties.

let person={
    fistName: 'jalindar',
    lastName: 'Dhembare',
    age: 23
};
console.log(person);

//Output: {fistName: 'jalindar', lastName: 'Dhembare', age: 23} */
//------------------------------------------------------------------