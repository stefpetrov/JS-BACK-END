const subscribers = {}

function subscribe(eventType, callback) {
    if (!subscribers[eventType]) {
        subscribers[eventType] = []
    }
    subscribers[eventType].push(callback)

    // unsubscribe
    return function () {
        subscribers[eventType] = subscribers[eventType].filter(fn => fn != callback)
    }
}


function publish(eventType, ...params) {
    if (!subscribers[eventType]) {
        return
    }

    subscribers[eventType].forEach(fn => fn.apply(null, params))

}



const eventBus = {
    subscribe,
    publish
}

module.exports = eventBus