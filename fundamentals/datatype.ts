// TS is a statically typed language, which means that you need to declare the type of a variable when you create it. This helps catch errors at compile time, rather than at runtime.
// let data:number=10;

// data="ten";// compile time error

// console.log(data);


let num1:string="hello world";

let num2:number=12;

let result=num1+num2;

console.log(result); // Output: "hello world12"

// In the above code, we have declared a variable num1 of type string and assigned it the value "hello world". We have also declared a variable num2 of type number and assigned it the value 12. When we concatenate num1 and num2, TypeScript automatically converts num2 to a string and concatenates it with num1, resulting in "hello world12".


/*Primitive data types in TypeScript include:

1. string: Represents textual data. Example: let name: string = "John";

2. number: Represents numeric data. Example: let age: number = 25;

3. boolean: Represents a logical value, either true or false. Example: let isStudent: boolean = true;

4. null: Represents the intentional absence of any object value. Example: let emptyValue: null = null;

5. undefined: Represents an uninitialized variable or a variable that has not been assigned a value. Example: let uninitializedValue: undefined = undefined;

6.any: Represents a value of any type. Example: let dynamicValue: any = "Hello, TypeScript!";

7.union: Represents a value that can be one of several types. Example: let unionValue: string | number = "Hello, TypeScript!"; 

8. void: Represents the absence of a value. Example: let noReturnValue: void = undefined; 

*/

