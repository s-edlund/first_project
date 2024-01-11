console.log(`Hello World`);

const nargs = process.args.length;

if(nargs < 2)
   throw new Error(`insufficient argument count`);

console.log()
const mult = (a:number[][], b: number[][]): number[][] => {
   validate(b);
   validate(a);

   return [[2,3,4],[4,5,6]];
}

const validate = (m: number[][]) => {
   if(!m) 
      throw new Error(`matrix is not defined`);
   const numCols = m.length;
   if(!numCols)
      throw new Error(`No columns`);

   let numRows:number|undefined = undefined;
   m.forEach((row) => {
      if(numRows !== undefined && numRows !== row.length)
         throw new Error(`Rows lengths is not the same ${numRows} != ${row.length}`);
      numRows = row.length;
   });
}

const A = [[1,2,3],[4,5,6],[7,8,9]];
const B = [[1,2,3],[4,5,6],[7,8,9]];

let res = mult(A, B);

console.log(`res ${res}`);

