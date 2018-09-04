const magicNumbers = {
    two: 2,
    three: 3,
    five: 5,
    eight: 8
};
const testArr = [magicNumbers.two, magicNumbers.five, magicNumbers.eight];

//Task 1
function findType(param) {
    return typeof param;
}

console.log(findType('number'));
console.log(findType(null));


//Task 2
function forEach(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i], i, arr);
    }
}

forEach(testArr, (item) => console.log(item));


//Task 3
function map(arr, fn) {
    let plus3 = [];
    forEach(arr, function (item, i){
        plus3[i] = fn(item, i, arr);
    });
    return plus3;
}

console.log(map(testArr, function (el) {
    return el + magicNumbers.three;
}));


//Task 4
function filter(arr, fn) {
    let newArr = [];
    forEach(arr, (item, i) => {
        if (fn(item, i, arr)) {
            newArr[newArr.length] = item;
        }
    });
    return newArr;
}

console.log(filter(testArr, (item) => item > magicNumbers.three));


//Task 5
let array = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'age': 39,
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'age': 38,
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'age': 2,
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'age': 17,
        'eyeColor': 'green',
        'name': 'Weiss',
        'favoriteFruit': 'banana'
    }
];

function getAdultAppleLovers(data) {
    let filterObj = filter(data, function (element) {
        return element.favoriteFruit === 'apple' && element.age >= 18;
    });
    let findName = map(filterObj, function (item) {
        return item.name;
    });
    return findName;
}

console.log(getAdultAppleLovers(array));


//Task 6
function keys(obj) {
    let newArr = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newArr[newArr.length] = key;
        }
    }
    return newArr;
}

console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));


//Task 7
function values(obj) {
    let newArr = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newArr[newArr.length] = obj[key];
        }
    }
    return newArr;
}

console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));

//Task 8
function showFormattedDate(date) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return `It is ${day} of ${months[monthIndex]}, ${year}`;
}

console.log(showFormattedDate(new Date('2018-08-27T01:10:00')));
