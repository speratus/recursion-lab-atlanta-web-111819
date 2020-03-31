function printString(string) {
    console.log(string[0])

    if (string.length > 1) {
        let substring = string.substring(1, string.length)
        printString(substring)
    } else {
        return true
    }
}

function reverseString(string) {
    if (string.length > 1) {
        return string[string.length-1] + reverseString(string.substring(0, string.length-1))
    } else {
        return string[0]
    }
}

function isPalindrome(string) {
    if (string.length > 1) {
        return string[0] === string[string.length-1] && isPalindrome(string.substring(1, string.length-1))
    } else {
        return true
    }
}

function addUpTo(array, index) {
    if (array.length > 1) {
        return array[index] + addUpTo(array.slice(0, index), index-1)
    } else {
        return array[0]
    }
}

function maxOf(array) {
    if (array.length > 1) {
        let otherMax = maxOf(array.slice(1))
        return array[0] > otherMax ? array[0] : otherMax
    } else {
        return array[0]
    }
}

function includesNumber(array, test) {
    if (array.length > 1) {
        return test === array[0] || includesNumber(array.slice(1), test)
    } else {
        return test === array[0]
    }
}