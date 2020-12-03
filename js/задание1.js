const logItems = function (itemsName) {
  for (let i = 0; i < itemsName.length; i += 1) {
    const itemsPosition = i + 1

    console.log(`
        ${itemsPosition} - ${itemsName[i]}`)
  }
}
console.log(logItems([`Mango`, `Poly`, `Ajax`, `Lux`, `Jay`, `Kong`]))

console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]))
