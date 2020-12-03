const checkForSpam = function (message) {
    let messageWords = message.replace(/[\[\]']+/g, '')
    console.log(messageWords)
     messageWords = messageWords.toLowerCase().split(" ")
  console.log(messageWords)
  if (messageWords.includes("spam") || messageWords.includes("sale")) {
    return true
  } else {
    return false
  }
}

console.log(checkForSpam("Latest technology news")) // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam(`[SPAM] How to earn fast money?`)); // true




