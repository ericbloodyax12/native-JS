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
const Arr = [33, 9, 22, 2, 14.221,14.2222, -5,]  // j = 1
function sortTop (array) {
    for (let j = 0; j < array.length - 1; j++) {

        for (let i = 0; i < array.length - 1 - j; i++) {
            if (array[i] > array[i + 1]) {
                [array[i + 1], array[i]] = [array[i], array[i + 1]]
            }
        }
    } return array
}

console.log(sortTop(Arr));





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

