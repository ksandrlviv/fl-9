function isSmaller(a, b) {
    return a === b ? false : !isBigger(a, b);
}