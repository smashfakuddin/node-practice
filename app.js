const { ash, jahan } = require('./4-name')
const sayHello = require('./5-utils')
const items = require('./6-alternate-flavor')
const addValues = require('./7-mind-grenade')

addValues();
sayHello('jabed')
sayHello(ash)
sayHello(jahan)
console.log(items.singleperson.address)