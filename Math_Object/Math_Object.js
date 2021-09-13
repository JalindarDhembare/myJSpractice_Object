//----------------------------------
/* 01. Math.PI  
//-----------------------------------
var x=Math.PI;
console.log(x);

//Output: 3.141592653589793     */
//---------------------------------
/* 02. Math.E => Eulers no.
-----------------------------------
var x=Math.E;
console.log(x);

//Output: 2.718281828459045     */
/*-------------------------------------------------------------
// 03. Math.round(value)    =>returns the nearest integer value.
---------------------------------------------------------------*/
/* ex.01.

var x=Math.round(4.7);
console.log(x);

//Output: 5         */
//-----------------------
/* ex.02.

var x=Math.round(4.2);
console.log(x);

//Output: 4        */
//-----------------------
/* ex.03.

var x=Math.round(4.5);
console.log(x);

//Output: 5        */
/*------------------------------------------------------------------
// 04. Math.pow(value1,value2)    =>returns value1 power of value2.
--------------------------------------------------------------------*/
/* ex.01 

var x=Math.pow(5,3);
console.log(x);

//Output: 125        */
//-----------------------
/* ex.02

var x=Math.pow(2,4);
console.log(x);

//Output: 16        */
/*------------------------------------------------------------------
// 05. Math.sqrt(value)    =>returns square root of number.
--------------------------------------------------------------------*/
/* ex.01 

var x=Math.sqrt(25);
console.log(x);

//Output: 5        */
//-----------------------
/* ex.02

var x=Math.sqrt(100);
console.log(x);

//Output: 10       */
/*----------------------------------------------------------------------
// 06. Math.abs(value)    =>returns positive value of given no.
--------------------------------------------------------------------*/
/* ex.01.

var x=Math.abs(-2);
console.log(x);

//Output: 2        */
//-----------------------
/* ex.02

var x=Math.abs(-42);
console.log(x);

//Output: 42        */
//-----------------------
/* ex.03

var x=Math.abs(11);
console.log(x);

//Output: 11       */
/*----------------------------------------------------------------------------
// 07. Math.ceil(value)    =>returns value rounded *up* to the nearest integer.
----------------------------------------------------------------------------*/
/* ex.01

var x=Math.ceil(3.2);
console.log(x);

//Output: 4        */
//-----------------------
/* ex.02

var x=Math.ceil(8.6);
console.log(x);

//Output: 9        */
//-----------------------
/* ex.03

var x=Math.ceil(-3.2);
console.log(x);

//Output: -3       */
/*-------------------------------------------------------------------------------
// 08. Math.floor(value)    =>returns value rounded *down* to the nearest integer.
-------------------------------------------------------------------------------*/
/* ex.01

var x=Math.floor(3.2);
console.log(x);

//Output: 3        */
//-----------------------
/* ex.02

var x=Math.floor(8.6);
console.log(x);

//Output: 8        */
//-----------------------
/* ex.03

var x=Math.floor(-3.2);
console.log(x);

//Output: -4       */
/*-------------------------------------------------------------------------------
// 09. Math.Min(values)    =>returns lowest value in a list of arguments.
-------------------------------------------------------------------------------*/
/* ex.01

var x=Math.min(4,8,600,32,2,7);
console.log(x);

//Output: 2        */
//-----------------------
/* ex.02

var x=Math.min(4,-8,600,32,2,7);
console.log(x);

//Output: -8       */
//-----------------------
/* ex.03

var x=Math.min(-1,-5,-3,-17,-8);
console.log(x);

//Output: -17       */
/*-------------------------------------------------------------------------------
// 10. Math.Max(values)    =>returns highest value in a list of arguments.
-------------------------------------------------------------------------------*/
/* ex.01

var x=Math.max(4,8,600,32,2,7);
console.log(x);

//Output: 600        */
//-----------------------
/* ex.02

var x=Math.max(4,-8,86,32,2,-7);
console.log(x);

//Output: 86       */
//-----------------------
/* ex.03

var x=Math.max(-1,-5,-3,-17,-8);
console.log(x);

//Output: -1       */
/*-------------------------------------------------------------------------------
// 11. Math.trunc(value)    =>it removes decimal value and return the value.
-------------------------------------------------------------------------------*/
/* ex.01

var x=Math.trunc(13.37);
console.log(x);

//Output: 13        */
//-----------------------
/* ex.02

var x=Math.trunc(-5.13);
console.log(x);

//Output: -5       */
//-----------------------
/* ex.03

var x=Math.trunc(-0.123);
console.log(x);

//Output: -0       */
/*-------------------------------------------------------------------------------
// 12. Math.random()    =>It returns floating point random number between 0 & 1.
-------------------------------------------------------------------------------*/
/* ex.01. between 0 & 1....floating value

var x=Math.random();
console.log(x);

//Output:
0.9743417799796721
0.14978232954759751
0.4605400601962655        */
//----------------------------------------------
/* ex.02. between 0 & 10.....floating value(*11)

var x=Math.random()*11;
console.log(x);

//Output:
2.544407485043263
9.91635446494897
5.069842337407738           */
//-----------------------------------------------
/* ex.03. between 0 & 10....integer value

var x=Math.floor(Math.random()*11);         //floor() used here.
console.log(x);

//Output:
7
10
3                           */
//------------------------------------------------
/* ex.04. find random no between two numbers.

function test(min,max)
{
    let x=Math.floor(Math.random()*(max-min)+min);  //formulae
    return x;
}
console.log(test(10,20));
console.log(test(15,75));

//Output:
10     50
13     61
19     46                   */
//-------------------------------------------------------