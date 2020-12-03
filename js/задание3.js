const findLongestWord = function (string) {
    const words = string.split(" ")
    let longestWord = ` `
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word
        }
    }
    return longestWord

}



  //     wordsLength.sort(function (a, b) {

  //         return b.length - a.length;
  //     });
  //  console.log(wordsLength[0])


console.log(findLongestWord("The quick brown fox jumped over the lazy dog")) // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
