console.log("Hii Array Babua");
// It is an object in javascript.
// It is used to store muliple type of value.
// It's elements are get seperated by comma(,).

// Ways to Create an Array:
 
// 1. By using square bracket and literals(values): 
//         Empty array:
//             const arr1 = [];
//             const arr2 = [10,20,30]
//         Array with literals(values)

// 2. By using new keyword and Array Constructor:
            // Empty array:
            //     const arr1 = new Array();

//const arr =  new Array();
// const arr =  new Array(1,2,3,4,5);
// console.log(arr);

/*
! push()
const skills=["html","css","js"];
let x=skills.push("react","node")

console.log(skills)
console.log(x)
*/

//Methods: 1. push(value)method

        // let arr=[10,30,50,40];
        // let x=arr.push(100);
        // console.log(arr);
        
        // //console.log(x);         // Latest Array Size stored in x

        //     //2. pop(value)method
        // arr.pop();
        // console.log(arr);
        
//Method: //3. Unshift()

// const skills =["css", "js", "html"]
// let a = skills.unshift("react")
// console.log(skills);
// console.log(a);

//Method: //4. Shift()
//Method: //5. Splice() // splice(a,b,c) where a= starting index, b= no.of element to be deleted, c= values to be added. Tasks:-> Insertion, Deletion, Updation. 

//For Insertion:->
// const arr=["a","b","e","f"]
// console.log(arr);

// let x= arr.splice(2,0,"c","d")
// console.log(arr);
// console.log(x);// It will return an Array and it this case it will return the blank Array[].

//For Deletion:->
// const arr=["a","b","e","c"]
// console.log(arr);
// let x= arr.splice(2,1)
// console.log(arr);
// console.log(x);// It will return the deleted element in the array in the array["e"].

//For Updation:->
// const arr=["a","b","e","d"]
// console.log(arr);
// let x = arr.splice(2,1,"c")
// console.log(arr);
// console.log(x);// It will return the deleted element in the array in the array["e"].

//Method: //6. Slice()->

// const movies=["Race-3","PK","Dhammal","KGF","Welcome","PHP","Marco"]
// const comedymovies = movies.slice(1,3)
// comedymovies.push(movies.slice(4,6))
// console.log(comedymovies.flat());


//Method: //7. lastindexOf()

// const movies=["Race-3","PK","Dhammal","KGF","Welcome","PHP","Marco"]
// let indno= movies.lastIndexOf("PK")
// console.log(indno);


//Method: //8. indexOf()

// const movies=["Race-3","PK","Dhammal","KGF","Welcome","PHP","Marco"]
// let indexnumber= movies.indexOf("PHP",0)
// console.log(indexnumber);


//Method: //9. includes()
//Method: //10. reverse()
//Method: //11. sort()
//Method: //12. forEach()
//Method: //13. fill()
//Method: //14. map()
//Method: //15. filter()
//Method: //16. reduce()
//Method: //17. reduceRight()
//Method: //18. some()
//Method: //19. flat()
//Method: //20. flatMap()
//Method: //21. every()

// What is the difference b/w splice() and slice()?
        
// map ( callback, this arg)
// HOF
// It is used to iterate over an array
// It retruns a new array
// The value retruned by a callback function will be inserted in new Array.
// If CBF doesn't retrun anything undefined will be stored
//  To Find Sum
// 
// let array =[10,20,30,40,50]
// function findSum(arr1){
//         let sum=0;
//         for (let index = 0; index < arr1.length; index++) {
//                 sum=sum+arr1[index];
//         }
//         return sum;
// }
// let x= findSum(array);
// console.log(x);


let arr=[[1,2,3][4,5,6][7,8,9]]
let total=arr.reduce((acc1,row)=>{
        acc1= acc1+row.reduce((acc2,val)=> acc2+val, 0)
    return acc1; 
},0)
console.log(total);
