/* eslint-disable */

function and(x) {
  return function print(y) {
    return x + ' and ' + y
  }
}

const saltAnd = and('salt')
console.log(saltAnd('pepper')) // salt and pepper
console.log(saltAnd('sugar')) // salt and sugar

const waterAnd = and('water')
console.log(waterAnd('juice')) // water and juice

// 사용하는 함수는 같지만 환경이 다르다
