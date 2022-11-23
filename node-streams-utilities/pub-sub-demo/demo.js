const eventBus = require('./eventBus.js')

let unsubscribe = eventBus.subscribe('arewethereyet', function (town) {
    console.log('Yeeee we are in', town)
})

eventBus.subscribe('customEvent', (firstPerson, secondPerson) => {
    console.log('custom event triggered,', firstPerson, secondPerson)
})


eventBus.publish('arewethereyet', 'Sofia')
eventBus.publish('customEvent', 'Pesho', 'Gosho')
unsubscribe()
eventBus.publish('arewethereyet', 'Plovdiv')
eventBus.publish('customEvent', 'Pesho', 'Gosho')




