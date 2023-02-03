

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 24,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 24,
        isMarried: true,
        scores: 90
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
        scores: 121
    },
    {
        name: "alex",
        age: 22,
        isMarried: true,
        scores: 89
    },
];

//bubble sort
const Arr = {id:[33, 9, 22, 2, 14.221,14.2222, -5,]}  // j = 1
console.log(Arr.id)
function SortTop ({id:[]}) {
    for (let j = 0; j < this.id.length - 1; j++) {

        for (let i = 0; i < this.id.length - 1 - j; i++) {
            if (this.id[i] > this.id[i + 1]) {
                [this.id[i + 1], this.id[i]] = [this.id[i], this.id[i + 1]]
            }
        }
    }
}

new SortTop(Arr);





/*for (let j = 0; j < Arr.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < Arr.length - 1 - j; i++) {
        if (Arr[i] > Arr[i + 1]) {   // если true - надо переставить
            isSorted = false;
            [Arr[i + 1], Arr[i]] = [Arr[i], Arr[i + 1]]
        }
    }
    if (isSorted) break*/




//O(n^2) => O((n-1)^2)=> O((n-1)*((n-1)/2))

// 3,4
// a = a + b  => a = 7
// b = a - b  => b = 3
// a = a - b  => a = 4

