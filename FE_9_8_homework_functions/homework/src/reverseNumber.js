function reverseNumber(x) {
    if (x < 0) {
        return -reverseNumber(-x);
    }
    let str = x.toString();
    let strArray = str.split('');
    let reversedArray = strArray.reverse();
    let rev = reversedArray.join('');
    return parseFloat(rev);
}