

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

const getName = item => item.name

const getNames = (array)=>{
    const result = []
    const getName = item => item.name
    for  (let i= 0; i< array.length; i++){
        result[i]= getName(array[i])
    }

    return result
}

const getNewArray= (array, func) => { // .map
    const result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = func(array[i])

    }  return result
}

const itPush = (array, el)=>{
    array[array.length]= el
    return array.length
}

const itFilter = (array, func)=> {
    const result = [];
    for ( i = 0; i < array.length; i++) {
        if(func(array[i] === true)) {
            itPush(array,array[i])
    }
    }
    return result
}

const itIncludes = (array,value) =>{
    for (let i = 0; i < array.length ; i++) {
        if(array[i]=== value){
            return true
        }
        
    }
    return false
}

const itUnShift = (array, item) =>{  // add first el
    let temp = undefined
    for (let i = array.length-1; i >=0 ; i--) {
        array[i+1]=array[i]
    }
    array[0]=item
    return array.length
}

const itShift = (array) => {
    const removedItem = array[0]
    for (let i = 0; i <array.length ; i++) {
        array[i]= array[i+1]
    }
    array.length= array.length-1

    return removedItem
}

/*const new Array = (1,2,3,4)*/


console.log(getNewArray(students, getName));
const nums= [1,2,3,4,5]
itShift(nums)
console.log(nums);

 function getlenght() {
     return this.lenght
 }