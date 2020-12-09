Вариант 1

const findLongestWords = function (string) {
    const words = string.split(" ")
    let longestWord = ` `
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word
        }
    }
    return longestWord
}

console.log(findLongestWords("The quick brown fox jumped over the lazy dog")) // 'jumped'

console.log(findLongestWords("Google do a roll")) // 'Google'

console.log(findLongestWords("May the force be with you")) // 'force'

// Вариант 2

const findLongestWord = function (string) {
    const words = string.split(" ")

    words.sort(function (a, b) {
        return b.length - a.length
    })
    return words[0]
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")) // 'jumped'

console.log(findLongestWord("Google do a roll")) // 'Google'

console.log(findLongestWord("May the force be with you")) // 'force'
