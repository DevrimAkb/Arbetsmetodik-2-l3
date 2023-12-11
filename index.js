import _ from 'lodash'

const numbers = [1, 2, 3, 4, 5]

const doubledNumbers = _.map(numbers, num => num * 2)

console.log(doubledNumbers)

const birthYear = [1975, 1997, 2002, 1995, 1985]

const licenseYear = _.map(birthYear, age => age + 18)

console.log(licenseYear)

