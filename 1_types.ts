//========================//
//Typescript basics. 
//1. Types.
//========================//

// boolean (true/false)
const isFetchig: boolean = true;
const isLoading: boolean = false;

// number
const int: number = 42;

//string
const string: string = 'hello, world';

//arrays
const numbersArr: number[] = [1, 1, 2, 3, 5, 8];
const numArr: Array<number> = [9, 10, 11, 12, 13, 14]; //generics
const stringArr: Array<string> = ['hello', 'world']; //generics

//tuple
const info: [number, string] = [123456, 'Pavel'];

//any
let variable: any = 42;
variable = 'hellooooo';
variable = [];

//================
//function example
function sayMyName(name: string):void {
    console.log(name);
}

//never 
function throwError(message: string): never {
    throw new Error(message);
}

//type
type Login = string;
const login: Login = 'admin';

type Id = string | number;
const id1: Id = 42;
const id2: Id = 'string';

type SomeData = string | null | undefined;
const someData: SomeData = 'string';
const someData1: SomeData = null;
const someData2: SomeData = undefined;