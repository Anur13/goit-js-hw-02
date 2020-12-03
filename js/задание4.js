const formatString = function (string) {
    const stringLength = string.split('')
    // console.log(stringLength)

    if (stringLength.length < 40) {
        return string
    } else {
    stringLength.length = 40;
    // console.log(string)
const stringLong = stringLength.join('')
        return `${stringLong}...`
    }
};


console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString(`Vestibulum facilisis, purus nec pulvinar iaculis.`));



console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);

 