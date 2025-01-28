// ! sort(callback)


// let arr=[4,2,5,1,3]


// arr.sort((a,b)=>a-b)

// +ve swap
// -ve no swap
// 0 no swap

//console.log(arr)


// const skills=["html","css","js"];
// skills.sort()
// console.log(skills)



// let arr=[1,2,3,4,5];

// let mid=Math.floor(arr.length/2)

// console.log(arr)



// const newArr=arr.map((element,index)=> {

//     if(index < mid)
//     {
//         return element**2;
//     }
    
// })

// console.log(newArr)




/**
 

let arr=[1,2,3,4,5]
let mid=Math.floor(arr.length/2)

let x=  arr.filter((element,index,array)=>index < mid)

let y=  arr.filter((element,index,array)=> element !== 3)

console.log(x)
console.log(y)


/**
 * ! Reduce Method
let arr=[10,20,30,40,50];
let x=arr.reduce((acc,element,index,array)=>{

    acc=acc+element;

    return acc;
},10)

console.log(x)

 */

/**
 * ! Reduce right method
 

let arr=[10,20,30,40,50];

let x=arr.reduceRight((acc,element)=>{
            if(element >= 40)
            {
                acc.push(element);
            }

            return acc;
},[]).sort((a,b)=>a-b);

console.log(x)
*/

/**
 * ! 2d Array reduce method
let arr=[
          [1,2,3],
          [4,5,6],
          [7,8,9]
        ]

let total=arr.reduce((acc1,row)=>{

    acc1= acc1 + row.reduce((acc2,element)=>acc2+element,0)
                                   
    return acc1;
},0)

console.log(total);
 */


/**
 * ! filter Object inside array
 

let users=[
    { name:"Tinku", age:24},
    { name:"Dinga", age:17},
    { name:"Simba", age:16},
    { name:"Chombi", age:19}
]

  let eligibleUsers=users.filter(element=>{

    if(element.age>=18)
    {
            return true;
    }
  })



  let y=users.reduce((acc,element)=>{

    if(element.age>=18)
    {
        acc.push(element.name);
    }

    return acc;
  },[])

  console.log(eligibleUsers)
  console.log(y)
*/

/**
 * ! Assignment Question

  let products=[
    { itemName:"Shirt", price:2400},
    { itemName:"Shoes", price:1800},
    { itemName:"Lipstick", price:3600},
    { itemName:"Bag", price:1500},
    { itemName:"watch", price:3000}
]

1. totalPrice:-12300;
2. create one array of product having price less than 3000?
 

let products=[
    { itemName:"Shirt", price:2400},
    { itemName:"Shoes", price:1800},
    { itemName:"Lipstick", price:3600},
    { itemName:"Bag", price:1500},
    { itemName:"watch", price:3000}
]

let y=products.reduce((acc,element)=>{

    acc=acc+element.price;

    return acc;
  },0)

  console.log(y)

let z=products.reduce((acc,element)=>{
    if (element.price<3000) {
        acc.push(element.itemName);
    }
    return acc;
},[])
console.log(z);


flat(_) method:->

 let arr=[
            [1,2,3],
            [4,5,6],
            [7,8,9]
 ]
let x=arr.flat(1)
console.log(x);

let arr1D = arr.map(row=>{
  let x=row.filter(element=> element%2===0)
      return x;
  }).flat(1);
      

console.log(arr1D);

// flatMap():=>  Syntax:= flatMap(callback,thisArg)
let arr =  [1,2,3,4,6,5]

      let x = arr.flatMap(element => [element, element ** 2])
        console.log(x);
        
         

 Example of Every():=>

  const arr1 = [10,20,30,40,50]
  let res = arr1.every(element => element<60)   
  console.log(res);
     

//some() method:=>

  const arr1 = [10,20,30,40,50]
  let res = arr1.some(element => element>30)   
  console.log(res);*/

  const arr=[1,2,3,4,5]
  function findFact(n){
    let fact=1;
    for(let i=1; i<=n; i++){
      fact=fact*i;
    }
    return fact;
  
  }

  function arrayFact(arr)
  {
        let result = arr.map( element =>{
        let x= findFact(element);
        
        return x;
    })
    return result;
  }
  console.log(result);
  