let input
let total = 0
const numbers = []

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
