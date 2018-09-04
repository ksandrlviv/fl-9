function getClosestToZero(...arr) {
    let newArr = arr.map(item => Math.abs(item));
    return arr[newArr.indexOf(Math.min(...newArr))]
}