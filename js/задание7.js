const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"]

const isLoginValid = function (login) {
  if (login.length < 4 || login.length > 16) {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов")
    return false
  }
  return true
}

const isLoginUnique = function (allLogins, login) {
  for (let loginOne of allLogins) {
    if (logins.includes(login)) {
        return false;
      }
      return true;
      
    }
    
}

const addLogin = function (allLogins, login) {
    if (isLoginValid(login) === true) {
 
      
    if (isLoginUnique(allLogins, login) === true) {
      logins.push(login)
      return "Логин успешно добавлен!"
      }
    }
      return 'bla'
    
}


// const addLogin = function (allLogins, login) {
//     if ( isLoginUnique(allLogins, login) === true) {
//   return 'cool'
//     }
//     else {
//         return 'bla'
//     }
// }
// console.log(addLogin(logins, "robotGooges")) // 'Такой логин уже используется!'

console.log(isLoginUnique(logins, "robotGogles")) // 'Такой логин уже используется!'

// console.log(addLogin(logins, "Ajax")) // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")) // 'Такой логин уже используется!'
// console.log(addLogin(logins, "Zod")) // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, "jqueryisextremelyfast")) // 'Ошибка! Логин должен быть от 4 до 16 символов'
