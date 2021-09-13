/* 01. setFullYear()         =>modify and set the year

let x=new Date("September 13,2020 04:36:55");
x.setFullYear(2021);
console.log(x);

//Output: Tue Sep 13 2021 04:36:55 GMT+0530 (India Standard Time)   */
//---------------------------------------------------------------------
/* 02. setMonth()         =>modify and set the month(0-11).

let x=new Date("September 13,2021 04:36:55");
x.setMonth(0);
console.log(x);

//Output: Wed Jan 13 2021 04:36:55 GMT+0530 (India Standard Time)   */
//---------------------------------------------------------------------
/* 03. setDate()         =>modify and set the date(1-31).

let x=new Date("September 10,2021 04:36:55");
x.setDate(13);
console.log(x);

//Output: Mon Sep 13 2021 04:36:55 GMT+0530 (India Standard Time)   */
//---------------------------------------------------------------------
/* 04. setHours()         =>modify and set the hours(0-23).

let x=new Date("September 10,2021 04:36:55");
x.setHours(5);
console.log(x);

//Output: Fri Sep 10 2021 05:36:55 GMT+0530 (India Standard Time)   */
//---------------------------------------------------------------------
/* 05. setMinutes()         =>modify and set the minutes(0-59).

let x=new Date("September 10,2021 04:36:55");
x.setMinutes(55);
console.log(x);

//Output: Fri Sep 10 2021 04:55:55 GMT+0530 (India Standard Time)   */
//--------------------------------------------------------------------
/* 06. setSeconds()         =>modify and set the seconds(0-59).

let x=new Date("September 10,2021 04:36:55");
x.setSeconds(10);
console.log(x);

//Output: Fri Sep 10 2021 04:36:10 GMT+0530 (India Standard Time)   */
//--------------------------------------------------------------------

/* Que.01. find next 50th date from given date.

let x=new Date("September 13,2021 04:36:55");
x.setDate(x.getDate()+50);
console.log(x);

//Output: Tue Nov 02 2021 04:36:55 GMT+0530 (India Standard Time)   


let p=new Date("September 13,2021 04:36:55");
let q=new Date("September 13,2021 04:36:55");
q.setDate(q.getDate()+50);
console.log(p);
console.log(q);

//Output:
Mon Sep 13 2021 04:36:55 GMT+0530 (India Standard Time)
Tue Nov 02 2021 04:36:55 GMT+0530 (India Standard Time)     */
//---------------------------------------------------------------------

/*Que.02. How to compare date??

let x=new Date("September 10,2021 04:36:55");
let y=new Date();

if(y>x)
{
    console.log("x is past date");
}
else if(y<x)
{
    console.log("x is future date");
}
else
{
    console.log("Both are same date");
}

//Output: x is past date        */
//---------------------------------------------------------------------