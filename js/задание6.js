let input
let total = 0
const numbers = [];


do {
  input = prompt(`Введите число`)

  if (input === null) {
    break
  }
  numbers.push(Number(input))
  
} while (true)
// console.log(numbers)

 for (let number of numbers) {
total += number

  }
console.log(`Общая сумма ${total}`)

// let tot = 0
// const arg = [1, 3, 4, 6, 7, 2, 3]
// for (let ar of arg) {
// tot += ar
// }
// console.log(tot)
// console.log(arg)